function resizeSponsor(wrapperDiv){
	mainDiv = $("." + wrapperDiv);

  	numCeos = $(".sponsorDiv", mainDiv).length;

  	if(currentItem != 0){
    	animateSponsorDiv(mainDiv);
  	}else{

  		animateCeo = false;

  		$(".sponsor", mainDiv).each(function(){
	      if($(this).width()==0){
	      	//console.log(this);
	        animateCeo = true;
	      }
	    });

	    if(animateCeo){
	    	sponsorResetToNormal(mainDiv);
	    }else{
	    	sponsorSetToNormal(mainDiv);
	    }
  	}
}

function unbindSponsor(ceo){
  ceo.children().unbind('click');
}

function animateSponsorDiv(mainDiv){
	var sponsor = $(".sponsorDiv", mainDiv).eq(currentItem-1);
	var temp;

	//console.log(sponsor);

	sponsor.children().bind('click', function(){return false;});
	setTimeout(unbindSponsor(sponsor), 600);

	temp = $(".sponsorName", sponsor);
	$(".sponsorName", mainDiv).each(function(){
	if(!($(this).is(temp))){
		//console.log($(this));
		$(this).addClass("hidden");
	}
	});

	var whiteSpaceH = $(".sponsorName", sponsor).height() + (10 + itemHeight *0.005) * 2 - 10;
	var totalImgs = $(".imgSponsor", sponsor).length;
	var totalImgVer = Math.floor(Math.sqrt(totalImgs));
	var totalImgHor = Math.ceil(totalImgs/totalImgVer);
	var imgHei = ((itemHeight - whiteSpaceH) / totalImgVer) - 0;
	var imgWid = ($(window).width() / totalImgHor) - 0;
	var ratio = imgWid/imgHei;
	var curWid;
	var curHei;
	var curRatio;
	var marginLeft = 0;

	temp = $(".sponsor", sponsor);
	
	if(!isAnimated){

		$(".sponsor", mainDiv).each(function(){
		  if(!($(this).is(temp))){
		    $(this).animate({width:0},500);
		  }
		});

		temp.animate({'width':$(window).width()}, 500);

		$(".imgSponsor", sponsor).each(function(){
			var theImage = realSize(this);
			curWid = $(this).width();
			curHei = $(this).height();
			curRatio = curWid / curHei;
			console.log("totalImgs: " + totalImgs + " totalImgVer: "+ totalImgVer + " totalImgHor: "+ totalImgHor + " imgHei: "+ imgHei + " imgWid: "+ imgWid + " curHei: "+ curHei + " curWid: "+ curWid + " ratio: "+ ratio + " curRatio: "+ curRatio);

			//console.log(" imgWid: "+imgWid + " $(window).width(): "+$(window).width() + " totalImgHor: "+ totalImgHor + " total: "+ ($(window).width() - (imgWid * totalImgVer)));
			if(curRatio > ratio){
				$(this).animate({
					'margin-top': (imgHei - (imgWid/curRatio)) * 0.5,
					'margin-bottom': (imgHei - (imgWid/curRatio)) * 0.5,
					'margin-left':($(window).width() - (imgWid * totalImgHor)) * 0.5,
					width: imgWid,
					height: imgWid / curRatio,
					'padding-right': 5,
					'padding-left': 5,
					'padding-top':0,
					'padding-bottom':0,
				},500);
			}else{
				console.log("hello2");
				$(this).animate({
					'margin-left':(imgWid - (imgHei * curRatio)) * 0.5,
					width: imgHei * curRatio,
					height: imgHei,
					'margin-top': 0,
					'margin-bottom': 0,
					'padding-right': 5,
					'padding-left': 5,
					'padding-top':0,
					'padding-bottom':0,
				},500);
			}
		});

		//$(".imgSponWrap", sponsor).animate({width:imgWid, height:imgHei, padding:5},500);
		$(".sponsorName", sponsor).animate({top:0},	 500);
		$(".whiteSpace", sponsor).animate({width:$(window).width(), height:whiteSpaceH}, 500);

		$(".sponsorName", sponsor).addClass("clicked");
		isAnimated = true;

	//if it is currently selected, resize
	}else{

		$(".imgSponsor", sponsor).each(function(){
			var theImage = realSize(this);
			curWid = theImage[0];
			curHei = theImage[1];
			curRatio = curWid / curHei;

			console.log("totalImgs: " + totalImgs + " totalImgVer: "+ totalImgVer + " totalImgHor: "+ totalImgHor + " imgHei: "+ imgHei + " imgWid: "+ imgWid + " curHei: "+ curHei + " curWid: "+ curWid + " ratio: "+ ratio + " curRatio: "+ curRatio);

			if(curRatio > ratio){
				$(this).animate({
					'margin-top': (imgHei - (imgWid/curRatio)) * 0.5,
					'margin-bottom': (imgHei - (imgWid/curRatio)) * 0.5,
					'margin-left':($(window).width() - (imgWid * totalImgHor)) * 0.5,
					width: imgWid,
					height: imgWid / curRatio,
					'padding-right': 5,
					'padding-left': 5,
					'padding-top':0,
					'padding-bottom':0,
				},1);
			}else{
				console.log("hello2");
				$(this).animate({
					'margin-left':(imgWid - (imgHei * curRatio)) * 0.5,
					width: imgHei * curRatio,
					height: imgHei,
					'padding-right': 5,
					'padding-left': 5,
					'padding-top':0,
					'padding-bottom':0,
				},1);
			}
		});

		$(".imgSponsor", sponsor).css({'margin-left':0, 'width':$(window).width()});
		$(".sponsor", sponsor).css({width:$(window).width()});

		var whiteSpaceH = $(".sponsorName", sponsor).height() + (10 + itemHeight *0.005) * 2 - 10;

		$(".whiteSpace", sponsor).css({width:$(window).width(), height:whiteSpaceH});
		sponsor.css({'width':$(window).width()});

		$(".sponsorName", sponsor).css({top:0});
	}
}

function sponsorResetToNormal(mainDiv){
	var portion = sum(numCeos);
	var count = numCeos;
	var numOfImgs = 0;
	var wid;

	$(".sponsorName", mainDiv).each(function(){
		$(this).removeClass("hidden");
	});

	$(".sponsorDiv", mainDiv).each(function(){

		var sponsor =  $(".sponsor", this);
		wid = $(window).width() * 1/(numCeos*2) + ($(window).width()*0.5 * count/(portion));
	    sponsor.animate({width:wid},500);
	    count--;

	    $(".whiteSpace", sponsor).css({width:$(window).width(), height:0});

	    $(".sponsorName", this).animate({
	      'top':itemHeight * 0.65, 
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
	    },500);

	    var totalImgs = $(".imgSponsor", sponsor).length;
		var totalImgVer = Math.floor(Math.sqrt(totalImgs));
		var totalImgHor = Math.ceil(totalImgs/totalImgVer);
		var curWid;
		var curHei;
		var curRatio;

		var totalH = 0;

		$(".imgSponsor", sponsor).each(function(){
			var theImage = realSize(this);
			curWid = theImage[0];
			curHei = theImage[1];
			curRatio = curWid / curHei;
			//console.log("totalImgs: " + totalImgs + " totalImgVer: "+ totalImgVer + " totalImgHor: "+ totalImgHor + " imgHei: "+ imgHei + " imgWid: "+ imgWid + " curHei: "+ curHei + " curWid: "+ curWid + " ratio: "+ ratio + " curRatio: "+ curRatio);
			$(this).animate({
				'margin-left':0,
				width: wid,
				height: wid / curRatio,
				'padding-right': 5,
				'padding-left': 5,
				'padding-top':0,
				'padding-bottom':0,
			},500);

			if(totalH + (wid / curRatio) <= itemHeight){
				numOfImgs++;
				totalH += wid / curRatio;
			}
		});
		
		var paddingH = (itemHeight - totalH) / (numOfImgs * 2);

		$(".imgSponsor", sponsor).animate({
			'margin-top': paddingH,
			'margin-bottom': paddingH,
		},500);
	});

	$(".sponsorName", mainDiv).removeClass("clicked");
}

function sponsorSetToNormal(mainDiv){
	var portion = sum(numCeos);
	var count = numCeos;
	var numOfImgs = 0;
	var wid;

	$(".sponsorDiv", mainDiv).each(function(){

		var sponsor =  $(".sponsor", this);
		wid = $(window).width() * 1/(numCeos*2) + ($(window).width()*0.5 * count/(portion));

		$(".whiteSpace", sponsor).css({width:$(window).width(), height:0});

	    sponsor.css({
	    	width:wid,
	    	height:itemHeight,
	    });
	    count--;

	    $(".sponsorName", this).css({
	      'top':itemHeight * 0.65, 
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

	    var totalImgs = $(".imgSponsor", sponsor).length;
		var totalImgVer = Math.floor(Math.sqrt(totalImgs));
		var totalImgHor = Math.ceil(totalImgs/totalImgVer);
		var curWid;
		var curHei;
		var curRatio;

		var totalH = 0;

		$(".imgSponsor", sponsor).each(function(){
			var theImage = realSize(this);
			curWid = theImage[0];
			curHei = theImage[1];
			curRatio = curWid / curHei;
			//console.log("totalImgs: " + totalImgs + " totalImgVer: "+ totalImgVer + " totalImgHor: "+ totalImgHor + " imgHei: "+ imgHei + " imgWid: "+ imgWid + " curHei: "+ curHei + " curWid: "+ curWid + " ratio: "+ ratio + " curRatio: "+ curRatio);
			$(this).css({
				'margin-top':0,
				'margin-bottom':0,
				'margin-left':0,
				width: wid,
				height: wid / curRatio,
				'padding-right': 5,
				'padding-left': 5,
				'padding-top':0,
				'padding-bottom':0,
			});

			if(totalH + $(this).height() <= itemHeight){
				numOfImgs++;
				totalH += $(this).height();
			}
		});

		var paddingH = (itemHeight - totalH) / (numOfImgs * 2);

		console.log('totalH= ' + totalH + ' numOfImgs:= ' + numOfImgs + ' paddingH= ' + paddingH);

		$(".imgSponsor", sponsor).css({
			'margin-top': paddingH,
			'margin-bottom': paddingH,
		});
	});

	$(".divider", mainDiv).css({height:itemHeight, width:3});

	$(".sponsorName", mainDiv).removeClass("clicked");

	  	console.log("Hi All");
}

function sum(num){
	if(num == 1){
		return 1;
	}else{
		return num + sum(num -1);
	}
}

function realSize(curImg){
	var theImage = new Image();
	theImage.src = $(curImg).attr("src");
	var curWid = theImage.width;
	var curHei = theImage.height;

	return [curWid, curHei];
}