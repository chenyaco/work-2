$(document).ready(function () {
    // 打開左側選單
    $('.mobile-link').click(function (event) {
        $('body').toggleClass('open');
    });

    // 關閉左側選單
    $('.mobile-close').click(function (event) {
        $('body').removeClass('open');
    });


    $('.aside > .menu > li > a').click(function (event) {
        event.preventDefault();

        //我自己的ul做摺疊效果
        $(this).parent().find('ul').slideToggle();

    });


});