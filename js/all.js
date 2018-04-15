$(document).ready(function () {
    
    // 打開左側選單
    $('.mobile-link').click(function (event) {
        $('body').toggleClass('open');
    });

    // 關閉左側選單
    $('.mobile-close').click(function (event) {
        $('body').removeClass('open');
    });

    $('.navbar').click(function (event) {
        $('body').removeClass('open');
    });

    $('content').click(function (event) {
        $('body').removeClass('open');
    });

    


    $('.aside > .menu > li > a').click(function (event) {
        event.preventDefault();
        //this以外的都隱藏起來
        $(this).parent().siblings().find('ul').slideUp();
        //我自己的ul做摺疊效果
        $(this).parent().find('ul').slideToggle();
    });


    $('.aside > .menu > li > ul > li > a').click(function (event) {
        event.preventDefault();
        //this以外的都隱藏起來
        $(this).parent().siblings().find('ul').slideUp();
        //我自己的ul做摺疊效果
        $(this).parent().find('ul').slideToggle();
    });





    $(".flexslider").flexslider({
        slideshowSpeed: 5000, //展示时间间隔ms
        animationSpeed: 500, //滚动时间ms
        touch: true //是否支持触屏滑动
    });


    //下拉式收闔選單
    $('.dropdown').click(function (event) {
        /* Act on the event */
        event.preventDefault();
        $('.dropdown').toggleClass('active');
        $('.dropdown-open').slideToggle();
    });


    //top 滑動效果 
    $('.top a').click(function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });
    
});


//置頂nav固定
$(window).load(function () {
    $(window).bind('scroll resize', function () {
        var $this = $(this);
        var $this_Top = $this.scrollTop();

        //當高度小於100時，關閉區塊 
        if ($this_Top < 100) {
            $('nav').stop().animate({ top: "-65px" });
        }
        if ($this_Top > 100) {
            $('nav').stop().animate({ top: "0px" });
        }
    }).scroll();
});






