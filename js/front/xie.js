
~function(){
	$._ajax = function(option){
		var _option = extend(option,{
			type : "get",
			dataType : "text"
		});
		return $.ajax(_option).fail(function(err){
			if(err.status == 400){
				window.location.href = "/404.html";
			}
			if (err.status == 500){
				window.location.href = "/500.html";
			}
		});
	}
}()

function extend(source,targe){
	for (var key in source) {
		targe[key] = source[key];
	}
	return targe;
}
-function(){
	/**
	 * 判断输入格式
	 */
	$.fn.extend({
			isEmpty : function(str){
				var reg = /^\S+$/;
				return reg.test(str);
			},
			isEmail : function(str){
				var reg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
				return reg.test(str);
			},
		}
	)
	/**
	 * 提示信息
	 */
	$.fn.extend({
			warning : function(title,content){
				var title = title || "警告";
				var content = content || "信息有误！";
				var html ='<div class="messageError">' +
                        '<strong>&nbsp$(title)&nbsp</strong>&nbsp &nbsp&nbsp&nbsp$(content)' +
                      '</div>';
                var $h = $(this).html(html.replace("$(title)",title).replace("$(content)",content)).css("display","block");
                $h.clearQueue().fadeIn().delay(500).queue(function(){
                	$(this).fadeOut();
                }).delay(500).dequeue();
                return $(this);
			},
		}
	)
}()

