// 제이쿼리로 작업중임.. 자스랑 섞어 쓰면 에러남..!
$(function () {
    //스크롤 시 메뉴 변경

    // $(window).on('scroll', function () {
    //     // console.log('scrolld')
    //     // var scm = $('.submenu');
    //     // var scm = $('.header .nav');
    //     var sch = $(window).scrollTop();
    //     console.log(sch);

    //     if (sch > 100) {
    //         $('.header .nav').addClass('scroll')
    //     } else {
    //         $('.header .nav').removeClass('scroll')
    //     }
    // });
    // 우선 보이는 상태로 css 먼저 작업 후 진행

    //스크롤 시 메뉴 변경 끝








    // main_visual 슬라이더 Start

    // 시작시 함수 한번 초기화 해주는거!! 수빈이가 알려준거 써서 슬라이더 처음부터 제대로 돌아가게 해야함..!
    $('.main_slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        // useTransform: false,
    });

    $('.main_slider').on('afterChange', function (e, s, c) {
        console.log(e, s, c);
        $('.slide_util .slide_pager .current_index').text("0" + (c ? c + 1 : 1))
        $('.slide_util .slide_pager .bar_progress').addClass('on')
    });

    $('.main_slider').on('beforeChange', function () {
        $('.slide_util .slide_pager .bar_progress').removeClass('on')
    });

    // best 슬라이더 Start
    $('.product_slider').slick({
        arrows: false,
        autoplay: false,
        // useTransform: false,
        slidesToShow: 4,
    });

    // 슬라이더 버튼
    $('.product_slide_arrows .hover_area_left .prev').on('click', function () {
        $('.product_slider').slick('slickPrev')
    });
    $('.product_slide_arrows .hover_area_right .next').on('click', function () {
        $('.product_slider').slick('slickNext')
    });
})