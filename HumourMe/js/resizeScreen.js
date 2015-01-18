function resizeScreen(){
  pulledCurtain = 1;
  splashH = $(window).width()*0.5;
  itemHeight = splashH - 50;

  replaceImages();

  $(".noScroll").css({width:$("body").width()});
  $(".wrapper").css({width:$("body").width() + 20});

  if (splashH < 320){
    splashH = 320;
  }

  if($(window).width() <= 992 || scrolling == true){
    $("header.navbar").addClass("navbar-fixed-top");
    headerSize = 0;
    logoSize = 0.70;
    logoTop = 0.20;
    pulledCurtain = 0;
    $(".splashScreen").css({height:splashH - 1.2 * headerSize - 30});
    $(".extraScreen").css({height:splashH - 1.2 * headerSize - 30});
    $(".blackScreen").css({height:splashH - 1.2 * headerSize - 30});
  }else{
    $("header.navbar").removeClass("navbar-fixed-top");
    headerSize = splashH * 0.15;
    logoSize = 0.95;
    logoTop = 0.05;
    pulledCurtain = 1;
    $(".splashScreen").css({height:splashH - 0.85 * headerSize});
    $(".extraScreen").css({height:splashH - 0.85 * headerSize});
    $(".blackScreen").css({height:splashH - 0.85 * headerSize});
  }

    $(".fullH").css({height:splashH - 0.8 * headerSize});
    $(".comicTop").css({height: (splashH - 0.8 * headerSize) *logoTop + 1});
    $(".comic").css({height: (splashH - 0.8 * headerSize) *logoSize});
    $(".curtainBG").css({height:(splashH - 0.8 * headerSize) + (splashH - $(".splashScreen").height()) * 1.3 * pulledCurtain});
    
    //adjust size of star's name based on the length of name.
    $(".splashStar").css({
      'font-size':5 + splashH * 0.075
    });
    $(".splashTitle").css({
      'font-size':5 + splashH * 0.025
    });

    $(".headerSpacing").css({height: 50 * Math.abs(pulledCurtain - 1)});
    $(".headerSpacing").css({height:(splashH - $(".splashScreen").height())*0.2});

    $(".starring").css({width:$(window).width() * 1.21});
    $(".chairs").css({width:$(window).width()});
    $(".sponsoring").css({height:itemHeight * 0.25});

    resizeSign();

    $(".bioBG").css({height:itemHeight});
    $(".starOuter").css({height:itemHeight});

    $(".sponsorTable").css({
      width:$(".left1").width() * 0.9,
      'margin-left': $(".left1").width() * 0.05,
      'margin-right': $(".left1").width() * 0.05,
      height:itemHeight * 0.9,
    })

    bioSignTop = splashH * 0.15;

    if(bioSignTop < 70){
      bioSignTop = 70;
    }

    $(".bioSign").css({
      'top':bioSignTop,
      'left':($(".bioSign").width() * -0.15),
      'font-size': 5 + splashH * 0.030,
      'border-radius': 5 + splashH * 0.005,
      'padding-left': 15 + splashH *0.03,
      'padding-right': 15 + splashH *0.03,
      'padding-top': 10 + splashH *0.005,
      'padding-bottom': 10 + splashH *0.005
    });

    $(".title").css({
      'font-size': 7 + splashH * 0.025,
      'height': bioSignTop,
      'padding-left': 10 + splashH *0.005,
      'padding-right': 10 + splashH *0.005,
      'padding-top': 0 + splashH *0.005,
      'padding-bottom': 10 + splashH *0.005,
    });

    $(".empty").css({
      'height':$(".bioSign").height() + (10 + splashH *0.005) * 2
    });

    $(".bioInfo").css({
      'height':$(".bioBG").height() - ($(".title").height() + $(".empty").height() + (splashH *0.005) + (10 + splashH *0.005)),
      'padding-right': 5 + splashH *0.005,
      'padding-left': 5 + splashH *0.005, 
      'padding-bottom': 5 + splashH *0.005, 
      'padding-top': 10 + splashH *0.005, 
      'font-size': 6 + splashH * 0.012,
    });

    $(".ceoZ").css({height:itemHeight});
    $(".judgesZ").css({height:itemHeight*0.5});
    $(".coachesZ").css({height:itemHeight*0.5});
    $(".sponsorsZ").css({height:itemHeight});

    $(".ceoTitle").css({height:itemHeight * 0.4});

    $(".ceoTitleH1").css({
      'margin-top':itemHeight * 0.4 * 0.35,
      'font-size': 5 + itemHeight * 0.1
    });

    $(".ceoTitleSpan").css({
      'font-size': 5 + itemHeight * 0.03
    });

    $(".ceoWrapper").css({width:$(window).width() + 20, height: itemHeight + 20});
    $(".ceo").css({height:itemHeight});

    $(".sponsorWrapper").css({width:$(window).width() + 20, height: itemHeight + 20});

    resizeCEOs("ceoZ");
    resizeCEOs("judgesZ");
    resizeCEOs("coachesZ");
    resizeSponsor("sponsorsZ");

    $("galleryZ").css({
      height:itemHeight,
    });

    $(".galleryHeader").css({
      'font-size': 5 + itemHeight * 0.070
    });

    $(".galleryItems").css({
      'height':itemHeight - itemHeight*0.12 - 10,
      'width':$(window).width() * 0.3333333333 - (itemHeight * 0.11) - 10,
      'margin-left':itemHeight * 0.25 * 0.11,
      'margin-right':itemHeight * 0.25 * 0.11,
    });

    $(".scroller").css({
      width:$(".galleryItems").width() + 20,
      height:$(".galleryItems").height() + 20
    });

    $(".sponsorTable").css({
      width:$(".left1").width() *0.9,
      height:itemHeight*0.9,
      'font-size': 3 + itemHeight * 0.01,
    });

    $(".galleryVideo").css({
      height:itemHeight- itemHeight*0.12, 
      width:$(window).width() * 0.6666666666,
      'margin-left':itemHeight * 0.25 * 0.11,
      'margin-right':itemHeight * 0.25 * 0.11,
    });

    var galleryImageH = 0;
    if(776 * 0.33333333 > $(".galleryItems").width()){
       galleryImageH = $(".galleryItems").height() * 0.40;
    }else{
      galleryImageH = $(".galleryItems").height() * 0.23;
    }

    $(".galleryImageOuter").css({
        height: galleryImageH
    });

    //Makes starring photo float right even though its position is absolute
    $(".starring").css({left: $(window).width() - $(".starring").width()});
  }

  function resizeSign(){
    $(".dateMain").css({'font-size': $(".splashScreen").height() * 0.2 *0.4});
    $(".dateSub").css({'font-size': $(".splashScreen").height() * 0.2 *0.5 * 0.4});
    $(".dateH").css({
      'font-size': $(".splashScreen").height() * 0.2 *0.15,
      'padding-top': $(".splashScreen").height() * 0.2 *0.25 * 0.5 
    });
    $(".dateF").css({'font-size': $(".splashScreen").height() * 0.2 *0.15});
    $(".dateMainW").css({
      width: $(".sign").width(), 
      height: $(".dateMain").height() + 1,
    });

    $(".sickKidsLogoW").css({
      height: $(".splashScreen").height() * 0.2 *0.85,
      'padding-top': $(".splashScreen").height() * 0.2 *0.15
    });

    $(".dundeeLogoW").css({
      height: $(".splashScreen").height() * 0.2 *0.65
    });

    $(".dundeeF").css({
      'font-size': $(".splashScreen").height() * 0.2 *0.15,
      'padding-top': $(".splashScreen").height() * 0.2 *0.07
    });
  }