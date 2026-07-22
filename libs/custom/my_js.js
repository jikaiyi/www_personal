$(document).ready(function(){
  var $nav=$('.navbar'),$body=$('body'),$window=$(window),navOffsetTop=$nav.offset().top;
  function onScroll(){
    if(navOffsetTop<$window.scrollTop()&&!$body.hasClass('has-docked-nav'))$body.addClass('has-docked-nav');
    if(navOffsetTop>$window.scrollTop()&&$body.hasClass('has-docked-nav'))$body.removeClass('has-docked-nav');
  }
  $window.on('scroll',onScroll);
  $window.on('resize',function(){$body.removeClass('has-docked-nav');navOffsetTop=$nav.offset().top;onScroll();});
  $('a[href^="#"]').on('click',function(e){var target=$(this.hash);if(target.length){e.preventDefault();$('html,body').stop().animate({scrollTop:target.offset().top-40},0);}});
});
