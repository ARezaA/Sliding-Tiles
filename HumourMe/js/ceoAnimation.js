

function resizeCEOs(wrapperDiv){

  mainDiv = $("." + wrapperDiv);

  numCeos = $(".ceoDiv", mainDiv).length;

  if(currentItem != 0){

    animateDiv(mainDiv);
  }else{

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      $(".ceoName").each(function(){
        $(this).removeClass("hidden");
      });
    }

    animateCeo = false;

    $(".ceo", mainDiv).each(function(){
      if($(this).width()==0){
        animateCeo = true;
      }
    });

    if(animateCeo){
      ceoNameResetToNormal(mainDiv);
    }else{
      ceoNameSetToNormal(mainDiv);
    }

    $(".imgCeo", mainDiv).each(function(){
      $(this).css({width:$(window).width()});
    });
  }
}

function unbindCEO(ceo){
  ceo.children().unbind('click');
}

function animateDiv(mainDiv){

  var ceo = $(".ceoDiv", mainDiv).eq(currentItem-1);
  var temp;

  console.log(ceo);

  ceo.children().bind('click', function(){return false;});
  setTimeout(unbindCEO(ceo), 600);

  temp = $(".ceoName", ceo);
  $(".ceoName", mainDiv).each(function(){
    if(!($(this).is(temp))){
      $(this).addClass("hidden");
    }
  });

  temp = $(".ceo", ceo);
  if(!(isAnimated)){

    $(".ceo", mainDiv).each(function(){
      if(!($(this).is(temp))){
        $(this).animate({width:0},500);
      }
    });
    
    temp.animate({'width':$(window).width()}, 500);
    $(".imgCeo", ceo).animate({'margin-left':0},500);
    $(".ceoName", ceo).animate({
      top:bioSignTop, 
      'margin-left': $(window).width() * 0.565,
      'font-size': 5 + itemHeight * 0.030,
      'border-bottom-right-radius': 5 + itemHeight * 0.005,
      'border-top-right-radius': 5 + itemHeight * 0.005,
      'border-bottom-left-radius': 5 + itemHeight * 0.005,
      'border-top-left-radius': 5 + itemHeight * 0.005,
      'padding-left': 15 + itemHeight *0.03,
      'padding-right': 15 + itemHeight *0.03,
      'padding-top': 10 + itemHeight *0.005,
      'padding-bottom': 10 + itemHeight *0.005
    }, 500);

    temp = $(".bioBGCeo", ceo);
    temp.animate({width:$(window).width() * 0.4166666, height:itemHeight}, 500);
    temp.removeClass("hidden");

    $(".ceoName", ceo).addClass("clicked");
    isAnimated = true;

    //if it is currently selected, resize
  }else{

    $(".imgCeo", ceo).css({'margin-left':0, 'width':$(window).width()});
    $(".ceo", ceo).css({width:$(window).width()});
    ceo.css({'width':$(window).width()});

    $(".ceoName", ceo).css({
      top:bioSignTop, 
      'margin-left': $(window).width() * 0.565,
      'font-size': 5 + itemHeight * 0.030,
      'border-bottom-right-radius': 5 + itemHeight * 0.005,
      'border-top-right-radius': 5 + itemHeight * 0.005,
      'border-bottom-left-radius': 5 + itemHeight * 0.005,
      'border-top-left-radius': 5 + itemHeight * 0.005,
      'padding-left': 15 + itemHeight *0.03,
      'padding-right': 15 + itemHeight *0.03,
      'padding-top': 10 + itemHeight *0.005,
      'padding-bottom': 10 + itemHeight *0.005
    });

    $(".bioBGCeo", ceo).css({width:$(window).width() * 0.4166666, height:itemHeight});
  }
}

function ceoNameResetToNormal(mainDiv){

  //var ceo = $(".ceoDiv", mainDiv).eq(currentItem-1);
  //ceo.children().bind('click', function(){return false;});
  //setTimeout(unbindCEO(ceo), 600);

  var half = 2;
  if($(".halfHeight", mainDiv).is(".halfHeight")){
    half = 1;
  }

  $(".ceoDiv", mainDiv).each(function(){

    $(".ceo", this).animate({width:$(window).width() * 1/numCeos}, 500);

    console.log($(".ceoName", this));
    $(".ceoName", this).animate({
      'top':itemHeight * 0.65 * 0.5 * half,  
      'margin-left':0,
      'font-size': 3 + itemHeight * 0.030, 
      'border-bottom-right-radius': 5 + itemHeight * 0.005,
      'border-top-right-radius': 5 + itemHeight * 0.005, 
      'border-bottom-left-radius':0,
      'border-top-left-radius':0, 
      'padding-left': 15 + itemHeight *0.03,
      'padding-right': 15 + itemHeight *0.03, 
      'padding-top': 10 + itemHeight *0.005,
      'padding-bottom': 10 + itemHeight *0.005
    }, 500);

    var a = $(".bioBGCeo", this);
    a.animate({width:0, height:itemHeight}, 500);
    setTimeout(function(){a.addClass("hidden")}, 500);

    setTimeout(function(){$(".imgCeo", this).removeClass("hidden")}, 500);
  });

  $(".ceoName", mainDiv).removeClass("clicked");

  //Ceo image custom position
  $(".imgCeo1", mainDiv).animate({'margin-left':$(window).width() * -0.24}, 500);
  $(".imgCeo2", mainDiv).animate({'margin-left':$(window).width() * -0.10}, 500);
  $(".imgCeo3", mainDiv).animate({'margin-left':$(window).width() * -0.17}, 500);
  $(".imgCeo4", mainDiv).animate({'margin-left':$(window).width() * - 0.25}, 500);
  $(".imgCeo5", mainDiv).animate({'margin-left':$(window).width() * - 0.09}, 500);
  $(".imgCeo6", mainDiv).animate({'margin-left':$(window).width() * - 0.08}, 500);
  $(".imgCeo7", mainDiv).animate({'margin-left':$(window).width() * - 0.09}, 500);
  $(".imgCeo8", mainDiv).animate({'margin-left':$(window).width() * - 0.06}, 500);
  $(".imgCeo9", mainDiv).animate({'margin-left':$(window).width() * - 0.04}, 500);
}

function ceoNameSetToNormal(mainDiv){

  var half = 2;
  if($(".halfHeight", mainDiv).is(".halfHeight")){
    half = 1;
  }
  $(".ceoDiv", mainDiv).each(function(){
    var bioBGCEO = $(".bioBGCEO", this);
    bioBGCEO.addClass("hidden");
    bioBGCEO.css({width:0, height:itemHeight});

    $(".ceo", this).css({width:$(window).width() * 1/numCeos});

    $(".ceoName", this).css({
      'top':itemHeight * 0.65 * 0.5 * half, 
      'font-size': 3 + itemHeight * 0.030,
      'margin-left': 0,
      'border-bottom-right-radius': 5 + itemHeight * 0.005,
      'border-top-right-radius': 5 + itemHeight * 0.005,
      'border-bottom-left-radius': 0,
      'border-top-left-radius': 0,
      'padding-left': 15 + itemHeight *0.03,
      'padding-right': 15 + itemHeight *0.03,
      'padding-top': 10 + itemHeight *0.005,
      'padding-bottom': 10 + itemHeight *0.005
    });

    $(".imgCeo", this).css({'margin-left':$(window).width() * 1/numCeos * -0.5});

  });

  $(".ceoName", mainDiv).removeClass("clicked");

  //Ceo image custom positioning
  $(".imgCeo1", mainDiv).css({'margin-left':$(window).width() * -0.24});
  $(".imgCeo2", mainDiv).css({'margin-left':$(window).width() * -0.10});
  $(".imgCeo3", mainDiv).css({'margin-left':$(window).width() * -0.17});
  $(".imgCeo4", mainDiv).css({'margin-left':$(window).width() * - 0.25});
  $(".imgCeo5", mainDiv).css({'margin-left':$(window).width() * - 0.09});
  $(".imgCeo6", mainDiv).css({'margin-left':$(window).width() * - 0.08});
  $(".imgCeo7", mainDiv).css({'margin-left':$(window).width() * - 0.09});
  $(".imgCeo8", mainDiv).css({'margin-left':$(window).width() * - 0.06});
  $(".imgCeo9", mainDiv).css({'margin-left':$(window).width() * - 0.04});
}


