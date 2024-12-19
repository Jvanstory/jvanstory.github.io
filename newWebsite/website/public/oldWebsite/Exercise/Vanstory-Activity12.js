$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        slideWidth: 500,
        Minslides: 1,
        Maxslides: 1,
        slideMargin: 10,
        randomStart: true,
        captions: true,
        speed: 2000,
        pager: true,
        pagerType: 'short',
        pagerSelector: "#pager"
    });
});