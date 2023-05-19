// JavaScript Document
window.addEventListener("load",function(){
		an2();
		function an2(){
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			var hig= window.innerHeight;
			var htmlHeight = window.innerHeight;
			var min =scrollTop+htmlHeight;
			var donghua =$(".donghua");
			donghua.each(function(i){
				var gd = donghua.eq(i).offset().top;	
				if(min>gd){
					$(this).css({
						"transform": "translate(0,0)",
					"opacity": "1",
					"transition": "all 1s .2s"
					});
				}else if(donghua.eq(i).hasClass("zuo")){
					$(this).css({
						"transform": "translate(-700px,0)",
					"opacity": "1",
					"transition": "all 1s .2s"
					});
				}
				else if(donghua.eq(i).hasClass("you")){
					$(this).css({
						"transform": "translate(700px,0)",
					"opacity": "1",
					"transition": "all 1s .2s"
					});
				}
				else if(donghua.eq(i).hasClass("sha")){
					$(this).css({
						"transform": "translate(0,-200px)",
					"opacity": "1",
					"transition": "all 1s .2s"
					});
				}
				else{
					$(this).css({
						"transform": "translate(0,700px)",
					"opacity": "1",
					"transition": "all 1s .2s"
					});
				}
				
			});			
		}
		
	window.addEventListener("scroll",an2);
});
	


