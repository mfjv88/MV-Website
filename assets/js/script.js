$(document).ready(function(){
  $('.type-it').typeIt({
    strings: ['Welcome to my website'],
    speed: 100,
    lifeLike: true,
    cursor: true
  });
  $('.parallax-window').parallax();
  $('#menu').slicknav();
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
  $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, fade it in */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},1500);
            }
        });
    });
  $('iframe').load(function(){
    console.log("test");
    $('.freebirdFormviewerViewFormBanner').css('height: 150px;');
  });
});
