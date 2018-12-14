$(function(){
    //当鼠标放在上面和移开时的事件，方法触发 mouseenter 和 mouseleave 事件。
	$('.mainCate').hover(function(){
		$(this).find('.submenu').css("display","block");
	},function(){
		$(this).find('.submenu').css("display","none");
	})
})