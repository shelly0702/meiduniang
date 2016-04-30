$(function(){
    $('.top-box .flex3').tap(function(){
        var self = $(this);
        self.addClass('active').siblings('.active').removeClass('active');
    });
});