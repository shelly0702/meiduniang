$(function(){
    $('.menu li').tap(function(){
        var self = $(this);
        self.addClass('curr').siblings('.curr').removeClass('curr');
        $('.mt h3').text(self.text());
    });
});