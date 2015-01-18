var shrinkHeader = false;
var offset = 1;

$(document).ready(function(){
    $("img.fadeImg").hover(
        function(){
            $(this).stop().animate({"opacity": "0"}, 400);
        },
        function(){
            $(this).stop().animate({"opacity": "1"}, "slow");
        }
    );

    $("img.logoImg").hover(
      function(){
          $(this).stop().css({"opacity": "0"});
      },
      function(){
          $(this).stop().css({"opacity": "1"});
      }
    );


    setTimeout(function(){
      
      $("html, body").animate({ 

        scrollTop: Math.abs($(window).height() - ($(".mapImg").height() + $("div.corp5").height() + 120))

        }, 1000);



      setTimeout(function(){});

        setTimeout(function(){$("div.corp3").removeClass("invisible").addClass("fadeInUp");},250);
        setTimeout(function(){$("div.corp4").removeClass("invisible").addClass("fadeInUp");},500);
        setTimeout(function(){$("div.corp5").removeClass("invisible").addClass("fadeInUp");},750);
        setTimeout(function(){$("div.corp7").removeClass("invisible").addClass("fadeInUp");},1000);
        setTimeout(function(){$("div.corp5-xs").removeClass("invisibleV2").addClass("fadeInUp");},750);
        setTimeout(function(){$("div.corp7-xs").removeClass("invisibleV2").addClass("fadeInUp");},1000);

    } ,1500);

});

$(window).resize(function(){
    var headerHeight = ($(window).height()) - ($("div.corp1").height())*1.05;
    $(".headerHeightAnimated").animate({height:headerHeight}, 1000);
    $(".contentStyle").css({height:$(window).height()-103});
});

$(window).ready(function(){

    $(".headerHeightAnimated").css({height:$(window).height()});
    $(".contentStyle").css({height:$(window).height()-103});

    
});

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    var height = $(window).height();

    $(".tileMessage").text(function(){
        //return "height= " + height + "\n" + "scroll= " + scroll;
    });
    
});

$("li.dropdown").hover(
  function(){$("li.dropdown").addClass("open");},
  function(){$("li.dropdown").removeClass("open");}
);
