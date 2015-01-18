
function resizeCEOItem(wrapperDiv, item){
  //console.log(ceoItem);
  var mainDiv = $("." + wrapperDiv);
  var ceo = $(".ceoName", mainDiv).eq(item-1);
  if((currentItem == item && mainDiv.is(currentDiv)) || ceo.hasClass("clicked")){
    currentItem = 0;
  }else{
    currentDiv = mainDiv;
    currentItem = item;
    isAnimated= false;
  }
  resizeCEOs(wrapperDiv);
}

function resizeSponsorItem(wrapperDiv, item){
    //console.log(ceoItem);
  var mainDiv = $("." + wrapperDiv);
  var sponsor = $(".sponsorName", mainDiv).eq(item-1);
  if((currentItem == item && mainDiv.is(currentDiv)) || sponsor.hasClass("clicked")){
    currentItem = 0;
  }else{
    currentDiv = mainDiv;
    currentItem = item;
    isAnimated= false;
  }
  resizeSponsor(wrapperDiv);
}

function setMouseDown(){
  var count = 0;
  $(".imgCeo").each(function(){
    count++;
    //$(this).click(function(){resizeCEOItem(count);});
  });
}

if(!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))){

  var temp;
//console.log("ololo9lo");

  $(".ceoDiv").each(function(){
    //console.log($(this));
    $(this).hover(function(){
      var a = $(".ceoName", $(this));
      a.addClass("fadeInUp");
      a.removeClass("hidden");
    },function(){
      var a = $(".ceoName", $(this));
      if(!(a.hasClass("clicked"))){
        a.removeClass("fadeInUp");
        a.addClass("hidden");
      }
    });
  });

}else{
  $(".ceoName").each(function(){
    $(this).removeClass("hidden");
  });
}

function hideDiv(expandDiv, hideDivItem){
  expandDiv = $("." + expandDiv);
  hideDivItem = $("." + hideDivItem);

  if(hideDivItem.hasClass("hidden")){
    expandDiv.removeClass("col-xs-12");
    expandDiv.addClass("col-xs-5");

    hideDivItem.removeClass("hidden");
  }else{
    expandDiv.removeClass("col-xs-5");
    expandDiv.addClass("col-xs-12");

    hideDivItem.addClass("hidden");
  }
}