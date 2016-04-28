$(function(){
	

	//轮播图
	var swiper = new Swiper('.swiper-container', {
	    pagination: '.swiper-pagination',
	    paginationClickable: true,
	    centeredSlides: true,
	    autoplay: 5000,
	    autoplayDisableOnInteraction: false,
	    loop:true
	});
	
	//轮播图分页居中
	function fixPagePosition() {
		var $page = $('.swiper-container-horizontal>.swiper-pagination');
		$page.css('margin-left' , -$page.width()/2 + 'px');
	};
	fixPagePosition();

	
});
