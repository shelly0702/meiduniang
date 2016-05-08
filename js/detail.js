$(function(){
    var $scroll = $('#scroll');
    var $scrollLiLength = $scroll.find('li').length;
    var $scrollLiWidth = $scroll.find('li').eq(0).width();
    $('#scroll').width($scrollLiLength * ($scrollLiWidth + 10) -10);
    var scrollX = new IScroll('#scroll-wraper',{
        scrollX: true,
        scrollY: false
    });
});