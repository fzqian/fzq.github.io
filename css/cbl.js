
// JavaScript Document

$(function() {
	//打开按钮获取
	var div1 = $('.buttonPlay');
	//关闭按钮获取
	var div2 = $('.buttonOut');
	//侧边栏
	var cbl = $('.bt-menu');
	
	//点击关闭按钮删除样式
	div2.click(function() {
		cbl.removeClass('bt-left2');	
		div1.removeClass('bt-left1');
	})
	
	//点击打开按钮增加样式
	div1.click(function() {
		//这里注意新添加的类不能有(.)，否则无法正常执行
		if(!cbl.hasClass('bt-left2')){
			//按钮和侧边栏出来			
			cbl.addClass('bt-left2');
			
		}
		else if(div2.click){				
			//按钮和侧边栏返回
			div1.removeClass('bt-left1');	
			cbl.removeClass('bt-left2');
			
		}
		else{				
			
			cbl.removeClass('bt-left2');	
			
		}
	})
})
window.addEventListener("load",function(){
	var btn=document.getElementById("btn");
	$(function(){
	var a =true;
	 btn.click(function(){
		if(a==true)		
			{
				a=false
				$("body,html").animate({
					"scrollTop":"0px"

			},1000,function(){
					a=true;
				});
	}
		}
	 )
	})
})
// JavaScript Document
window.addEventListener("load",function(){
var cx1 = document.getElementById("cx1");
var cxx1 = document.getElementById("cxx1");
var cx2 = document.getElementById("cx2");
var cxx2 = document.getElementById("cxx2");
var cx3 = document.getElementById("cx3");
var cxx3 = document.getElementById("cxx3");
var cx4 = document.getElementById("cx4");
var cxx4 = document.getElementById("cxx4");

cxx1.addEventListener('click',function () {
	cx1.style.display = "inline";
});
cxx2.addEventListener('click',function () {
	cx2.style.display = "inline";
});
	cxx3.addEventListener('click',function () {
	cx3.style.display = "inline";
});
	cxx4.addEventListener('click',function () {
	cx4.style.display = "inline";
});
});
