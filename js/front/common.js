//window.onresize = function(){
// var wrap=document.getElementById('setwrap');
// alert('a');
// if(document.body.clientWidth < 1000){
//    wrap.style.width = "1000px";
// }else{
//    return false;
// }

$(window).resize(function(){    
//	alert("窗体大小改变了!");

	var aImgBg = document.getElementsByClassName('mgzTitleBg');
	var aImgTxt = document.getElementsByClassName('mgzTitleText');
//	var aImgBg=$('.mgzTitleBg');
	var aImgTxt=$('.mgzTitleText');
	var aBd=$('.db');
//	aImgBg.style.width = aBd.offsetWidth;
	
	
//	for (var i = 0; i < aImgBg.length; i++) {
//		aImgBg[i].style.width = aImgBg[i].offsetWidth-30+'px';//保证一开始两者宽度相等
//
//	};
//	for (var i = 0; i < aImgTxt.length; i++) {
//		aImgTxt[i].style.width = aImgBg[i].offsetWidth+'px';//保证一开始两者宽度相等，使两个span能够浮动开来
//
//	};
//	
//		alert(aImgBg.width);
//	for (var i = 0; i < aImgBg.length; i++) {	//改变浏览器大小时使aImgBg和aImgTxt适应屏幕
//		aImgBg[i].style.width = aBd[i].offsetWidth;
//		aImgTxt[i].style.width = aBd[i].offsetWidth;
//		
//		};
});

 