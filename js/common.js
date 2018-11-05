jQuery(function ($) {
    $(".list-section").hover(function () {
        var that = $(this);
        $(".overseasDetail-onOff").removeClass("ic_less");
        that.find(".overseasDetail-onOff").toggleClass("ic_less");
        $(".detail").not(that.find(".detail")).stop(true, true).slideUp(400, function () {
            that.find(".detail").stop(true, true).slideDown(400);
        });
    }, function () {
        var that = $(this);
        that.find(".detail").stop(true, true).slideUp(400);
        that.find(".overseasDetail-onOff").removeClass("ic_less");
    })
    $(".winit-sm-box").mouseleave(function () {
        $(".detail").stop(true, true).slideUp(400);
    })
});