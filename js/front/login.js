
	$(function(){
	   var flag = true;
	   /**
	    * 登录注册操作
	    */
	   //注册界面获取Cookie
	   
	  	$("#phoneNum").keydown(function(ev){
	   		var oEvent=ev||event;
				if(oEvent.keyCode!=8 && (oEvent.keyCode<48||oEvent.keyCode>57))
				{
					$("#messageError").warning("错啦！！","手机号格式不对！");
					return false;
				}
				
			});
				
	   $("#agreeRegist").click(function(){
	   		var $phoneNum= $("#phoneNum");
		    var $phonePsw = $("#phonePsw");
		    var $yanzhenma = $("#yanzhenma");
		    var $messageError = $("#messageError"); 
		    var $checkbox=$('#checkbox');
//		    alert($checkbox.is(':checked'));
		    if (!$checkbox.is(':checked')){
				$messageError.warning("注意！！","你还没同意tfin协议");
				$checkbox.focus();
				return false;
			}
	   		if (!$phoneNum.isEmpty($phoneNum.val())) {
				$messageError.warning("注意！！","手机号不能为空！");
				$phoneNum.focus();
				return false;
			}
//	   		alert($phoneNum.val().length);
	   		if($phoneNum.val().length<11){  
	   			$messageError.warning("注意！！","输入位数错误！");
				$phoneNum.focus();
				return false;
	   		}
			if (!$phonePsw.isEmpty($phonePsw.val())) {
				$messageError.warning("错啦！！","密码不能为空！");
				$phonePsw.focus();
				return false;
			}
			if (!$yanzhenma.isEmpty($yanzhenma.val())) {
				$messageError.warning("错啦！！","验证码不能为空！");
				$yanzhenma.focus();
				return false;
			}
			if (flag == true && $yanzhenma.val() != "kfvi") {
	   			$messageError.warning("错啦！！","验证码输入错误！");
	   			return;
	   		} else if(flag == false && $yanzhenma.val() != "2Gzg"){
	   			$messageError.warning("错啦！！","验证码输入错误！");
	   			return;
	   		}
	   		setCookie("phoneNum",$("#phoneNum").val());
	   		setCookie("phonePsw",$("#phonePsw").val());
	   		window.location.pathname = "xx.html"
	   })
	  
	  
	   //登录界面验证
	  	$("#phoneNum").keydown(function(ev){
	   			var oEvent=ev||event;
					if(oEvent.keyCode!=8 && (oEvent.keyCode<48||oEvent.keyCode>57))
					{
						$("#messageError").warning("注意！！","手机格式不对！");
						return false;
					}
				});
				
	   $("#btn-login").click(function(){
	   	open("index.html");
	   	
	   	 	var $phoneNum = $("#phoneNum");
		    var $phonePsw = $("#phonePsw");
		    var $yanzhenma = $("#yanzhenma");
		    var $messageError = $("#messageError"); 
	   	 	if (!$phoneNum.isEmpty($phoneNum.val())) {
				$messageError.warning("错啦！！","手机号不能为空！");
				$phoneNum.focus();
				return false;
			}
	   	 	if($phoneNum.val().length<11){  
	   			$messageError.warning("注意！！","输入位数错误！");
				$phoneNum.focus();
				return false;
	   		}
			if (!$phonePsw.isEmpty($phonePsw.val())) {
				$messageError.warning("错啦！！","密码不能为空！");
				$phonePsw.focus();
				return false;
			}
			if (!$yanzhenma.isEmpty($yanzhenma.val())) {
				$messageError.warning("错啦！！","验证码不能为空！");
				$yanzhenma.focus();
				return false;
			}
			if (flag == true && $yanzhenma.val() != "kfvi") {
	   			$messageError.warning("错啦！！","验证码输入错误！");
	   			return;
	   		} else if(flag == false && $yanzhenma.val() != "2Gzg"){
	   			$messageError.warning("错啦！！","验证码输入错误！");
	   			return;
	   		}
		    if ($phoneNum.val() == getCookie("phoneNum") && $phonePsw.val() == getCookie("phonePsw")) {
		   		window.location.pathname = "index.html";
		    }else{
		    	$messageError.warning("错啦！！","密码或者帐号输入错误！");
		    }
	   })
	   
	   /**
	    * 验证码图片切换
	    */
	   var $code = $("#coderight");
	   $code.click(function(){
	   		if (flag == true) {
				$(this).removeClass("codeimg1 codeimg2");
				$(this).addClass("codeimg1");
	   			flag = false;
	   		} else{
	   			$(this).removeClass("codeimg1 codeimg2");
	   			$(this).addClass("codeimg2");
	   			flag = true;
	   		}
	   })
	    $("#chang").click(function(){
	   		if (flag == true) {
				$code.removeClass("codeimg1 codeimg2");
				$code.addClass("codeimg1");
	   			flag = false;
	   		} else{
	   			$code.removeClass("codeimg1 codeimg2");
	   			$code.addClass("codeimg2");
	   			flag = true;
	   		}
	   })
	   	/**
	   	 * ajax渲染
	   	 */
	    $("#regist").click(function(){
	    	$._ajax({url : " "}).then(function(result){
	    		$("#inputpanel").html(result);	
	    	});
	    });
	     $("#regist2").click(function(){
	    	$._ajax({url : " "}).then(function(result){
	    		$("#inputpanel").html(result);	
	    	});
	    });
	});  
	function setCookie(c_name,value,expiredays){
	　　var exdate=new Date();
	　　exdate.setDate(exdate.getDate()+expiredays);
	　　document.cookie=c_name+ "=" +escape(value)+((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
	}
	function getCookie(c_name){
		if (document.cookie.length>0){
		  c_start=document.cookie.indexOf(c_name + "=")
		  if (c_start!=-1)
		    { 
		    c_start=c_start + c_name.length+1 
		    c_end=document.cookie.indexOf(";",c_start)
		    if (c_end==-1) c_end=document.cookie.length
		    return unescape(document.cookie.substring(c_start,c_end))
		    } 
		  }
		return ""
	}
	


