$(function (){
   "use strict";
   // Adjust Slider Height
   var windowHeight = $(window).height(),
       upperHeight = $(".upper-bar").innerHeight(),
       navHeight =  $(".navbar").innerHeight();
   $(".slider, .carousel-item").height( windowHeight - (upperHeight + navHeight) );
    
   // Featured Work Shuffle
   $(".featured-work ul li").on("click", function(){
      $(this).addClass("active").siblings().removeClass("active");
      if (($(this).data("class")) === "all"){
         $(".shuffle-images .col-md").css("opacity", 1);
      } else{
         $(".shuffle-images .col-md").css("opacity", 0.3);
         $($(this).data("class")).parent().css("opacity", 1);
      }
   });
});