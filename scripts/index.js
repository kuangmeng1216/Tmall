$(function  () {

// ------------头部隐藏----=====----
	$('.headNav-h').hover(
		function(){
			$(this).find('.headHidden').slideDown();
		},function(){
			$(this).find('.headHidden').slideUp();
	});
// -----------楼层产品效果----------
	$('.banner-border').hover(
		function(){
			$(this).find('img').animate({marginLeft:'-4px'},300);
		},function(){
			$(this).find('img').animate({marginLeft:'0'},300);
	});
// -----------banner轮播------------
	var index=0;
	var color=['#FFD1DC','#F9F3B9','#DBDBDD','#64C5A4','#E2E2E2','#B90AF9'];
	var lunbo=function(){
		$('.banner-row').hide();
		var el=$('.banner-row')[index];
		$('.banner').css({backgroundColor:color[index]});
		$('.num-nav').removeClass('red');
		$(el).show();
		$($('.num-nav')[index]).addClass('red');
		index+=1;
		if(index==$('.banner-row').length){
			index=0;
		}
	};
	var timerId=setInterval(lunbo,2000);
	$('.num-nav').each(function(i){
		$(this).data('index',i);
	});
	
	$('.num-nav').hover(function(){
		var i=$(this).data('index');
		clearInterval(timerId);
		$('.num-nav').removeClass('red');
		$(this).addClass('red');
		$('.banner-row').hide();
		$($('.banner-row')[i]).show();
		$('.banner').css({backgroundColor:color[i]});
		index=i;
	},function(){
		clearInterval(timerId);
		timerId = setInterval(lunbo,2000);
	});
// ----------banner侧栏隐藏---------
	var colors=['#FFD1DC','#FED44C','#F2F7FD','#345171','#DC2E63','#FBAD17','#D2FBF5','#A5856E','#D70609','#FFE957','#FFC6D5','#29A6FF','#E4E2E3','#FFD5D6','#30C4FF','#C9E0B2'];
	$('.item-h').each(function(i){
		$(this).data('index',i);
	});
	$('.item-h').hover(
		function(){
			var i=$(this).data('index');
			if(i==0){
				$($('.small-item')[0]).show();
			}else{
				clearInterval(timerId);
				// $($('.small-item')[0]).hide();
				$($('.ban-h')[i]).show();
				$($('.hidden')[i]).show();
				$('.banner').css({backgroundColor:colors[i]});
			}
			$(this).find('.item-list').show();
		},function(){
			clearInterval(timerId);
			var i=$(this).data('index');
			$($('.small-item')[0]).show();
			$(this).find('.item-list').hide();
			$($('.ban-h')[i]).hide();
			$($('.hidden')[i]).hide();
			$('.banner').css({backgroundColor:color[index-1]});
			timerId = setInterval(lunbo,2000);
	});
// ------------品牌选项卡-----------
	$('.fenlei').each(function(i){
		$(this).data('index',i);
	});
	$('.fenlei').click(function(){
		var i=$(this).data('index');
		$('.brand-hidden').removeClass('show');
		$('.fenlei').removeClass('border')
		$(this).addClass('border');
		$($('.brand-hidden')[i]).addClass('show');

	});
//----------------换一批------------
	$('.trigger-next').click(function(){
		var dict={},a=[],rad;
		$('.show').find('img').each(function(i){
			a.push($(this).attr('src'));
		});
		$('.show').find('img').each(function(i){
			rad=Math.floor(Math.random()*24);
			while(dict[rad]){
				rad=Math.floor(Math.random()*24);
			}
			dict[rad]=true;
			$(this).attr({src:a[rad]});
		});
	});
// ------------品牌切换-------------
	var indexf1=indexf2=indexf3=indexf4=indexf5=indexf8=1;
	var qiehuan1=function(){
		$($('.pinpai-chang')[0]).animate({marginLeft:'-100'*indexf1+'px'},'slow',function(){
			indexf1+=1;
			if(indexf1==4){
				$($('.pinpai-chang')[0]).css({marginLeft:'0px'});
				indexf1=1;
				return;
			}
		});
	};
	var timerId1=setInterval(qiehuan1,3000);
	$(".f1-r").click(function(){
		clearInterval(timerId1);
		$($('.pinpai-chang')[0]).animate({marginLeft:'-100'*indexf1+'px'},'slow',function(){
			indexf1+=1;
			if(indexf1==4){
				$($('.pinpai-chang')[0]).css({marginLeft:'0px'});
				indexf1=1;
				return;
			}
		});
		
		timerId1=setInterval(qiehuan1,3000);
	});
	$(".f1-l").click(function(){
		clearInterval(timerId1);
		$($('.pinpai-chang')[0]).animate({marginLeft:'-100'*indexf1+'px'},'slow');
		indexf1--;
		if(indexf1==-1){
			indexf1=2;
		}
		timerId1=setInterval(qiehuan1,3000);
	});
	var qiehuan2=function(){
		$($('.pinpai-chang')[1]).animate({marginLeft:'-100'*indexf2+'px'},'slow',function(){
			indexf2+=1;
			if(indexf2==4){
				$($('.pinpai-chang')[1]).css({marginLeft:'0px'});
				indexf2=1;
				return;
			}
		});
	};
	var timerId2=setInterval(qiehuan2,3000);
	$(".f2-r").click(function(){
		clearInterval(timerId2);
		var i=indexf2;
		$($('.pinpai-chang')[1]).animate({marginLeft:'-100'*indexf2+'px'},'slow',function(){

		});
		indexf2=i+1;
		if(indexf2==3){
			indexf2=0;
		}
		timerId2=setInterval(qiehuan2,3000);
	});
	$(".f2-l").click(function(){
		clearInterval(timerId2);
		$($('.pinpai-chang')[1]).animate({marginLeft:'-100'*indexf2+'px'},'slow');
		indexf2--;
		if(indexf2==-1){
			indexf2=2;
		}
		timerId2=setInterval(qiehuan2,3000);
	});
	var qiehuan3=function(){
		$($('.pinpai-chang')[2]).animate({marginLeft:'-100'*indexf3+'px'},'slow',function(){
			indexf3+=1;
			if(indexf3==4){
				$($('.pinpai-chang')[2]).css({marginLeft:'0px'});
				indexf3=1;
			}
		});
	};
	var timerId3=setInterval(qiehuan3,3000);
	$(".f3-r").click(function(){
		clearInterval(timerId3);
		var i=indexf3;
		$($('.pinpai-chang')[3]).animate({marginLeft:'-100'*indexf3+'px'},'slow');
		indexf3=i+1;
		if(indexf3==3){
			indexf3=0;
		}
		timerId3=setInterval(qiehuan3,3000);
	});
	$(".f3-l").click(function(){
		clearInterval(timerId3);
		$($('.pinpai-chang')[2]).animate({marginLeft:'-100'*indexf3+'px'},'slow');
		indexf3--;
		if(indexf3==-1){
			indexf3=2;
		}
		timerId3=setInterval(qiehuan3,3000);
	});
	var qiehuan4=function(){
		$($('.pinpai-chang')[3]).animate({marginLeft:'-100'*indexf4+'px'},'slow',function(){
			indexf4+=1;
			if(indexf4==4){
				$($('.pinpai-chang')[3]).css({marginLeft:'0px'});
				indexf4=1;
			}
		});	
	};
	var timerId4=setInterval(qiehuan4,3000);
	$(".f4-r").click(function(){
		clearInterval(timerId4);
		var i=indexf4;
		$($('.pinpai-chang')[3]).animate({marginLeft:'-100'*indexf4+'px'},'slow');
		indexf4=i+1;
		if(indexf4==3){
			indexf4=0;
		}
		timerId4=setInterval(qiehuan4,3000);
	});
	$(".f4-l").click(function(){
		clearInterval(timerId4);
		$($('.pinpai-chang')[3]).animate({marginLeft:'-100'*indexf4+'px'},'slow');
		indexf4--;
		if(indexf4==-1){
			indexf4=2;
		}
		timerId4=setInterval(qiehuan4,3000);
	});
	var qiehuan5=function(){
		$($('.pinpai-chang')[4]).animate({marginLeft:'-100'*indexf5+'px'},'slow',function(){
			indexf5+=1;
			if(indexf5==4){
				$($('.pinpai-chang')[4]).css({marginLeft:'0px'});
				indexf5=1;
			}
		});	
	};
	var timerId5=setInterval(qiehuan5,3000);
	$(".f5-r").click(function(){
		clearInterval(timerId5);
		var i=indexf5;
		$($('.pinpai-chang')[4]).animate({marginLeft:'-100'*indexf5+'px'},'slow');
		indexf5=i+1;
		if(indexf5==3){
			indexf5=0;
		}
		timerId5=setInterval(qiehuan5,3000);
	});
	$(".f5-l").click(function(){
		clearInterval(timerId5);
		$($('.pinpai-chang')[4]).animate({marginLeft:'-100'*indexf5+'px'},'slow');
		indexf5--;
		if(indexf5==-1){
			indexf5=2;
		}
		timerId5=setInterval(qiehuan5,3000);
	});
	var qiehuan8=function(){
		$($('.pinpai-chang')[5]).animate({marginLeft:'-100'*indexf8+'px'},'slow',function(){
			indexf8+=1;
			if(indexf8==4){
				$($('.pinpai-chang')[5]).css({marginLeft:'0px'});
				indexf8=1;
			}
		});
		
	};
	var timerId8=setInterval(qiehuan8,3000);
	$(".f8-r").click(function(){
		clearInterval(timerId8);
		var i=indexf8;
		$($('.pinpai-chang')[5]).animate({marginLeft:'-100'*indexf8+'px'},'slow');
		indexf8=i+1;
		if(indexf8==3){
			indexf8=0;
		}
		timerId8=setInterval(qiehuan8,3000);
	});
	$(".f8-l").click(function(){
		clearInterval(timerId8);
		$($('.pinpai-chang')[5]).animate({marginLeft:'-100'*indexf8+'px'},'slow');
		indexf8--;
		if(indexf8==-1){
			indexf8=2;
		}
		timerId8=setInterval(qiehuan8,3000);
	});
// -------------返回顶部------------
    //scrollTop从原来的位置回到0 ,用时700
	$(".m-top").click(function(){
		$({top:$(window).scrollTop()}).animate(
			{top:0},
			{
				duration:700,
				step:function(){
					$(window).scrollTop(this.top);
				}
		});
	});

	
// ------------fixed----------------
	var ti,tt;
	$(window).scroll(function(){
		if($(window).scrollTop()>300){
			clearTimeout(ti);
			ti=setTimeout(function(){
				$('#header-show').show();
			},500);
		}else{
			clearTimeout(ti);
			$('#header-show').hide();
		}
		if($(window).scrollTop()>850){
			clearTimeout(tt);
			tt=setTimeout(function(){
				$('#sn-nav-wrapper').show();
			},500);
		}else{
			clearTimeout(tt);
			$('#sn-nav-wrapper').hide();
		}
		$('.fp-floor').each(function(i){
			if(i==11&&$(window).scrollTop()>=$($('.fp-floor')[i]).offset().top-150){
				$($('.nav-name')[i]).find('.f-name').show();
				return;
			}else{
				$($('.nav-name')[i]).find('.f-name').hide();
			}
			if(i!=11&&$(window).scrollTop()>=$($('.fp-floor')[i]).offset().top-150
				&&$(window).scrollTop()<=$($('.fp-floor')[i+1]).offset().top-150){
				$($('.nav-name')[i]).find('.f-name').show();
			}else{
				$($('.nav-name')[i]).find('.f-name').hide();
			}
		});
	});
// ------------左侧导航hover--------
	$('.nav-name').each(function(i){
		$(this).data('index',i);
	});
	$('.nav-name').hover(
		function(){
			$(this).find('.f-name').show();
		},function(){
			var i=$(this).data('index');
			if($(window).scrollTop()>=$($('.fp-floor')[i]).offset().top-150&&$(window).scrollTop()<=$($('.fp-floor')[i+1]).offset().top-150){
				$(this).find('.f-name').show();
			}else{
				$(this).find('.f-name').hide();
			}
		});
// ------------定位楼层-------------
	// 取下标  $('.nav-name').index(this);
	$('.nav-name').click(function(){
		var i=$(this).data('index');
		$('.nav-name').find('f-name').hide();
		$(this).find('.f-name').show();
		var newtop=$($('.fp-floor')[i]).offset().top-100;
		$(this).find('.f-name').show();
		$({top:$(window).scrollTop()}).animate(
			{top:newtop},
			{
				duration:700,
				step:function(){
					$(window).scrollTop(this.top);
				}
			});
		return false;
	});
// ------------右侧导航hover--------
	$('.rightNav').hover(function(){
		$('.rightNav').stop();
		$(this).find('.tip').show(0,function(){
			$(this).animate({marginLeft:-90},200);
		});
	},function(){
		$('.rightNav').stop();
		$(this).find('.tip').css({marginLeft:-100}).hide(0);
	});
	$('.m-cart').hover(function(){
		$('.rightNav').stop();
		$(this).find('.icon-cart').css({backgroundImage:'url(./img/lyy21.png)'});
	});
	$(document).bind("mousedown", function(event){
	   event.preventDefault();
	});
	
	
});