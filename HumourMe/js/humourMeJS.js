  var headerSize; //keeps track of the height of the landing tile.
  var itemHeight; //Sets the height of each section exp Star, Host, Ceos, Sponsors, etc.
  var scrolling = false;
  var splashH=0; //Keeps track of the height of the landing tile.
  var pulledCurtain; //keeps track of the curtain if it's hanging under the navbar or if the navbar is on top.
  var currentItem = 0;
  var currentDiv;
  var animateCeo = false;
  var isAnimated = false;
  var bioSignTop;
  var imgDir = "images/";
  var numCeos = 3; //total num of Ceos
  var ceoCSS;
  var signCount = 0;

var debugCode;

// $.when(
//   $.getScript("js/ceoMouseDownEvent.js"),
//   $.getScript("js/ceoAnimation.js"),
//   $.getScript("js/resizeSponsor.js"),
//   $.getScript("js/replaceImages.js"),
//   $.getScript("js/resizeScreen.js"),
//     $.Deferred(function( deferred ){
//         $( deferred.resolve );
//     })
// ).done(function(){

  $(document).ready(function(){
    numCeos = $(".ceoDiv").length;
    setMouseDown();
    resizeScreen();

    setInterval(function(){ 
      $(".signMessage").eq(signCount).addClass("fadeOutUp");
      setTimeout(function(){
        $(".signMessage").eq(signCount).addClass("hidden").removeClass("fadeOutUp");
        signCount++;
        if(signCount >= $(".signMessage").length){
          signCount = 0;
        }
        $(".signMessage").eq(signCount).removeClass("hidden").addClass("fadeInUp");
        resizeSign();
      },800);
    }, 6000);

  });

  $(window).resize(function(){
    resizeScreen();
  });

  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();

    //$("div.debug").html("scroll= " + scroll + "  WindowSizeH= " + (itemHeight) + " pulledCurtain=" + pulledCurtain);

    if(scroll >= (splashH-headerSize)){
      scrolling = true;
      fixNavbar();
    }else{
      scrolling = false;
    }

    if($(window).width() <= 992 || scrolling == true){
      $("header.navbar").addClass("navbar-fixed-top");
      headerSize = 0;
      logoSize = 0.70;
      logoTop = 0.20;
      pulledCurtain = 0;
      $(".splashScreen").css({height:splashH - 1.2 * headerSize - 30});
    }else{
      $("header.navbar").removeClass("navbar-fixed-top");
      headerSize = splashH * 0.15;
      logoSize = 0.95;
      logoTop = 0.05;
      pulledCurtain = 1;
      $(".splashScreen").css({height:splashH - 0.85 * headerSize});
    }

    //resizeScreen();
  });

  function fixNavbar(){
    if(scrolling){
      $("header.navbar").addClass("navbar-fixed-top");
    }else{
      $("header.navbar").removeClass("navbar-fixed-top");
    }
  }

  function checkScroll(scroll){
    if($(window).width() <= 992 || scrolling == true){
      $("header.navbar").addClass("navbar-fixed-top");
      headerSize = 0;
      logoSize = 0.70;
      logoTop = 0.20;
      pulledCurtain = 0;
      $(".splashScreen").css({height:splashH - 1.2 * headerSize - 30});
    }else{
      $("header.navbar").removeClass("navbar-fixed-top");
      headerSize = splashH * 0.15;
      logoSize = 0.95;
      logoTop = 0.05;
      pulledCurtain = 1;
      $(".splashScreen").css({height:splashH - 0.85 * headerSize});
    }
  }

  function clickSign(item){
    $(".extraScreen").css({width:0}).removeClass("hidden");
    $(".extraScreen").animate({width:$(window).width()}, 500);
    $(".splashScreen").animate({width:0}, 500);
    setTimeout(function(){$(".splashScreen").addClass("hidden");}, 500);
  }
// });



