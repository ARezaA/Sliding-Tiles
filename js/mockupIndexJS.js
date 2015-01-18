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

	setTimeout(function() {
      shrinkHeader = true;
      var headerHeight = ($(window).height()) - ($("div.corp1").height())*1.05;
      $(".headerHeightAnimated").animate({height:headerHeight}, 1000);
      $("img.scroll").addClass("invisible");
      $("div.corp1").removeClass("invisible").addClass("fadeInLeft");
      $("div.corp2").removeClass("invisible").addClass("fadeInRight");
      $("div.corp3").removeClass("invisible").addClass("fadeInLeft");
      offset=0;
	}, 2000);

});

$(window).resize(function(){
	var headerHeight = ($(window).height()) - ($("div.corp1").height())*1.05;
    $(".headerHeightAnimated").animate({height:headerHeight}, 1000);
});

$(window).ready(function(){

	$(".headerHeightAnimated").css({height:$(window).height()});
    $(".contentStyle").css({height:$(window).height()});

	
});

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    var height = $(window).height();

    $(".tileMessage").text(function(){
		//return "height= " + height + "\n" + "scroll= " + scroll;
	});

    $(document).ready(function(){
    	if(scroll >= 100 * offset){
    		$("img.scroll").addClass("invisible");
    		$("div.corp1").removeClass("invisible").addClass("fadeInLeft");
    	}
    	if(scroll >= 100 * offset){
    		$("div.corp2").removeClass("invisible").addClass("fadeInRight");
    	}

    });
    
});

$("li.dropdown").hover(
  function(){$("li.dropdown").addClass("open");},
  function(){$("li.dropdown").removeClass("open");}
);