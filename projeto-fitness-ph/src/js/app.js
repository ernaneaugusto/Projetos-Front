$(document).ready(function(){
   $(window).scroll(function(){
      var altura = $(window).height() * 0.7;
      var i=0;

      if ($(this).scrollTop() > altura) {
         $('a[href="#top"]').fadeIn();          
         $('.navbar-brand img').addClass('diminuir-logo');
         $('.navbar').addClass('navbar-opacidade');
      } else {
         $('a[href="#top"]').fadeOut();
         $('.navbar-brand img').removeClass('diminuir-logo');
         $('.navbar').removeClass('navbar-opacidade');
      }
   });

   $('a[href="#top"], #logo').click(function(){
      $('html, body').animate({scrollTop : 0},900);
      return false;
   });
});