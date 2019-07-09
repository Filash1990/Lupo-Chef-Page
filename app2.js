$(function() {
  function init() {
    nav();
    modal();
    slider();
    top();
    mobileNavLink();
  }
  init();

  //nav

  function nav() {
    //burger open/close menu
    $(".burger").click(() => {
      $(".burger").toggleClass("toggle");
      $("#nav-links").toggleClass("nav-active");

      if ($("#nav-links").hasClass("nav-active")) {
        $("#nav-links").animate({ right: "50%" }, 400);
      } else {
        $("#nav-links").animate({ right: "1" }, 400);
      }
    });
  }

  function mobileNavLink() {
    //close menu on navlink click
    $(".nav-link").click(() => {
      if ($("#nav-links").hasClass("nav-active")) {
        $(".burger").toggleClass("toggle");
        $("#nav-links").toggleClass("nav-active");
        $("#nav-links").animate({ right: "1" }, 400);
      }
    });
  }

  function modal() {
    //modal
    //modal open
    $(".gallery__img").on("click", function() {
      $(".modal").css("visibility", "visible");
      $("#display").css("background-image", `url(${this.src})`);
      $(this).addClass("current-modal");
    });

    //modal close
    $("#display").click(() => {
      $(".modal").css("visibility", "hidden");
      $(".current-modal").removeClass("current-modal");
    });

    function modalNext() {
      //next
      $("#imgbtn-next").click(() => {
        let nextToDisplay;
        if (
          $(".current-modal").index() === $(".current-modal").siblings().length
        ) {
          nextToDisplay = $(".current-modal")
            .siblings()
            .first();
        } else {
          nextToDisplay = $(".current-modal").next();
        }
        loadNext(nextToDisplay);
      });
    }
    modalNext();

    function modalPrev() {
      //prev
      $("#imgbtn-prev").click(() => {
        let nextToDisplay;
        if ($(".current-modal").index() === 0) {
          nextToDisplay = $(".current-modal")
            .siblings()
            .last();
        } else {
          nextToDisplay = $(".current-modal").prev();
        }
        loadNext(nextToDisplay);
        console.log(nextToDisplay);
      });
    }
    modalPrev();

    function loadNext(nextToDisplay) {
      //image src set
      $(".current-modal").removeClass("current-modal");
      nextToDisplay.addClass("current-modal");
      $("#display").css(
        "background-image",
        `url(${$(".current-modal").attr("src")}`
      );
    }
  }

  //slider
  function slider() {
    //slider
    setInterval(() => {
      $(".ban-active")
        .show()
        .animate({ opacity: 1 }, 500);
      $(".ban-active")
        .siblings()
        .hide()
        .animate({ opacity: 0.3 }, 500);

      if ($(".ban-active").index() === 0) {
        nextToDisplay = $(".ban-active")
          .siblings()
          .last();
      } else {
        nextToDisplay = $(".ban-active").prev();
      }

      $(".ban-active").removeClass("ban-active");
      nextToDisplay.addClass("ban-active");
    }, 2000);
  }

  //toTop Button Display
  function top() {
    let topBtn = document.getElementById("toTop");
    window.addEventListener("scroll", topDisplay);
    function topDisplay() {
      if (window.scrollY > 200) {
        topBtn.style.display = "flex";
      } else {
        topBtn.style.display = "none";
      }
    }
  }
});
