
var b = true;
var a = true;		  //	返回底部和底部按钮
$(function(){
//给a一个布偶值

//当点击按钮1执行以下语句
$("#dingbu").click(function(){
	if(b===true){
		//给a否定值，防止误触
		b=false;
		//页面返回顶部
		//添加自定义属性，加上过渡时间
		$("body,html").animate({
			"scrollTop":"0px"
		},300)
		b = true;
	}
})
	$("#hddibu").click(function(){
	if(a===true){
		//给a否定值，防止误触
		a=false;
		//页面返回顶部
		//添加自定义属性，加上过渡时间
		$("body,html").animate({
			"scrollTop":"30000px"
		},1000)
		a = true;
	}
})
})

//绑定事件scroll
 	window.addEventListener('scroll', () => {
 	//获取元素
	let nav = document.querySelector('nav')
	// classList属性为元素添加类名
	//1.add(class1, class2, ...)	在元素中添加一个或多个类名。
	//2.contains(class)	返回布尔值，判断指定的类名是否存在
	//3.item(index)	返回元素中索引值对应的类名。索引值从 0 开始
	//4.remove(class1, class2, ...)	移除元素中一个或多个类名
	//5.toggle(class, true|false)	在元素中切换类名
	nav.classList.toggle('sticky', window.scrollY > nav.offsetHeight)
	})