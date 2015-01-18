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
      
      $("html, body").animate({ scrollTop: $(".mapImg").height() }, 1000);
      setTimeout(function(){});

        setTimeout(function(){$("div.corp6").removeClass("invisible").addClass("fadeInUp");},250);
        setTimeout(function(){$("div.corp7").removeClass("invisible").addClass("fadeInUp");},500);
        setTimeout(function(){$("div.corp10").removeClass("invisible").addClass("fadeInUp");},750);
        setTimeout(function(){$("div.corp12").removeClass("invisible").addClass("fadeInUp");},1000);
        setTimeout(function(){$("div.corp8").removeClass("invisible").addClass("fadeInUp");},1250);
        setTimeout(function(){$("div.corp11").removeClass("invisible").addClass("fadeInUp");},1500);
        setTimeout(function(){$("div.corp13").removeClass("invisible").addClass("fadeInUp");},1750);

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

