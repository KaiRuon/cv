$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) $(".menu").addClass("sticky");
    else $(".menu").removeClass("sticky");
  });

  $(".menu-toggler").click(function () {
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  });
});
