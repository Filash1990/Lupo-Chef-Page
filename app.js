/*const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  //TOGGLE
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    navLinks.forEach(x => {
      x.addEventListener("click", () => {
        navLinks.forEach((link, index) => {
          link.style.animation = "";
        });
        nav.classList.remove("nav-active");
        burger.classList.remove("toggle");
      });
    });
    //LINKS
    function navAnimation() {
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 +
            0.2}s`;
        }
      });
    }
    navAnimation();
    //buger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();
*/
/*modal*/
const imgbtn = document.getElementsByClassName("gallery__img");
const displayZone = document.getElementById("imgDisplay");
const modal = document.getElementById("modal");
const imgNext = document.getElementById("imgbtn-next");
const imgPrev = document.getElementById("imgbtn-prev");
const modalListeners = [];
/*const gallery = document.getElementById('gallery');*/

function displayModal(index, src) {
  displayZone.src = src;
  modal.classList.replace("modal", "modalActive");
  window.addEventListener("click", modalClickListener);
  const nextImageListener = () => {
    if (index === imgbtn.length - 1) {
      index = 0;
    } else {
      index++;
    }
    goToImg(index);
  };
  const prevImageListener = () => {
    if (index == 0) {
      index = imgbtn.length - 1;
    } else {
      index--;
    }
    goToImg(index);
  };
  imgNext.addEventListener("click", nextImageListener);
  imgPrev.addEventListener("click", prevImageListener);
  modalListeners.push(nextImageListener, prevImageListener);
}

function modalClickListener() {
  if (event.target == modal) {
    modal.classList.replace("modalActive", "modal");
    window.removeEventListener("click", modalClickListener);
    modalListeners.forEach(listener => {
      window.removeEventListener("click", listener);
    });
    modalListeners.splice(0, 1);
  }
}

(function() {
  for (var i = 0; i < imgbtn.length; i++) {
    const index = i;
    imgbtn[i].addEventListener("click", function() {
      displayModal(index, imgbtn[index].src);
    });
  }
})();

function goToImg(index) {
  displayZone.src = imgbtn[index].src;
}

//banner
function banner() {
  const banImages = document.getElementsByClassName("ban-img");
  let current = 0;
  const last = banImages.length;

  setInterval(() => {
    if (current < banImages.length - 1) {
      current++;
      banImages[current].classList.add("active-img");
      banImages[--current].classList.remove("active-img");
      current++;
    } else {
      banImages[current].classList.remove("active-img");
      current = 0;
      banImages[current].classList.add("active-img");
    }
  }, 3000);
}
banner();
//to top
let topBtn = document.getElementById("toTop");
window.addEventListener("scroll", topDisplay);
function topDisplay() {
  if (window.scrollY > 200) {
    topBtn.style.display = "flex";
  } else {
    topBtn.style.display = "none";
  }
}
//dishes
function samples() {
  let sample1 = document.getElementById("sample1");
  let sample2 = document.getElementById("sample2");

  sample1.addEventListener("click", enlarge);
  sample2.addEventListener("click", enlarge);

  function enlarge() {
    this.classList.toggle("big-sample");
  }
}
samples();

//toTop Button Display
let topBtn = document.getElementById("toTop");
window.addEventListener("scroll", topDisplay);
function topDisplay() {
  if (window.scrollY > 200) {
    topBtn.style.display = "flex";
  } else {
    topBtn.style.display = "none";
  }
}
