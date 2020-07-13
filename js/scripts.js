$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 50) {
      $(".menu").addClass("sticky");
      $(".gotop").fadeIn();
    } else {
      $(".menu").removeClass("sticky");
      $(".gotop").fadeOut();
    }
  });

  $(".gotop").click(function () {
    scroll(0, 0);
  });

  $(".menu-toggler").click(function () {
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  });
});
