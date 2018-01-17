$(function(){
	//轮播效果
	var aPic=$('.banner_pic ul li');
	var aBtn=$('.btn_num ul li');
	var z=0;   //当前
	var d=0;   //上一个
	
	aBtn.click(function(){
	    z=$(this).index();   //当前序列号
		auto();
	});
	function auto(){
		aBtn.eq(z).addClass('active').siblings().removeClass('active');
		if(z>d){
			aPic.eq(d).animate({left:'-100%'},500);
			aPic.eq(z).css({left:'100%'}).animate({left:'0'},500);
		}else if(z<d){
			aPic.eq(d).animate({left:'100%'},500);
			aPic.eq(z).css({left:'-100%'}).animate({left:'0'},500);			
		}
		d=z;
	}
	
	$('.banner').hover(function(){
		$('.btn').show();
	    },function(){
			$('.btn').hide();
			});
			
	$('.btn_left').click(function(){
		z++;
		if(z>2){z=0;}
		auto();
	});
	$('.btn_right').click(function(){
		z--;
		if(z<0){z=2;}
		auto();
	});
	
	//淡入淡出效果
	$('.filter').mouseenter(function() {
			$(this).animate({
				opacity: 0.5
			}, 300);
		});
		$('.filter').mouseleave(function() {
			$(this).animate({
				opacity: 0
			}, 300);
		});
	
	
});