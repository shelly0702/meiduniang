$(function(){
	var $citySelect = $('.s-input-tab-txt').eq(0);//城市容器
	var $projectSelect = $('.s-input-tab-txt').eq(1);//项目容器
	var $cityList = $('.city-list');//城市下拉列表

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
	//城市
	$citySelect.tap(function(){
		$('.city-list').toggle();
	});

	//项目
	$projectSelect.tap(function(){
		$('#J_TabNav').toggleClass('off').toggleClass('on');
	});

	//输入框
	$('.J_autocomplete').focus(function(){
		$('.suggest-container').show();
		$('.logo').hide();
		$('.closed').show();
		$('.s-input-tab').eq(0).hide();
		$('.s-input-tab').eq(1).show();
		$('.city-list').hide();
	});
	
	//取消按钮
	$('.closed').click(function(){
		$('.suggest-container').hide();
		$('.logo').show();
		$('.closed').hide();
		$('.s-input-tab').eq(0).show();
		$('.s-input-tab').eq(1).hide();
	});

	//输入框文字变化
	$('.J_autocomplete').keyup(function(){
		var self = $(this);
		if(self.val().length > 0) {
			self.parents('.s-form-search').find('button').show();
		}
	});

	//输入框中的关闭按钮
	$('.s-form-search').find('button').tap(function(){
		var self = $(this);
		self.parents('.s-form-search').find('.J_autocomplete').val('');
	});

	//城市选择
	$cityList.find('li').tap(function(){
		var self = $(this);
		$citySelect.text(self.text());
		self.addClass('active').siblings('.active').removeClass('active');
		$cityList.hide();
	});

	//
	$('#J_TabNav li').tap(function(){
		var self = $(this);
		$projectSelect.text(self.text());
		$('#J_TabNav').addClass('off').removeClass('on');
	});
});
