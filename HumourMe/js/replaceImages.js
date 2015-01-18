function replaceImages(){
  if($(window).width() <=1024){
    $("img").each(function(){
      $(this).attr("src", $(this).attr("src").replace(imgDir, "images/Mobile/"));
    });
    imgDir = "images/Mobile/";
  }else if($(window).width() <=1280){
    $("img").each(function(){
      $(this).attr("src", $(this).attr("src").replace(imgDir, "images/Tablet/"));
    });
    imgDir = "images/Tablet/";
  }else if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $("img").each(function(){
      $(this).attr("src", $(this).attr("src").replace(imgDir, "images/Mobile/"));
    });
    imgDir = "images/Mobile/";
  }
}

