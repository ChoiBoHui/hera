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


    // 메뉴 호버 Start
    // $(".nav").on({
    //     "mouseover": function () {
    //         console.log("Mouse Over");
    //     },
    //     "mouseout": function () {
    //         console.log("Mouse Out");
    //     }
    // });

    let main_menu = $('.header .main_menu');
    let nav = $('.header .nav');
    $(main_menu).on({
        "mouseover": function () {
            // console.log("Mouse Over");
            // nav.addClass('active')
            if (main_menu.hasClass("submenu")) {
                nav.addClass('active')
            }
        },
        "mouseout": function () {
            // console.log("Mouse Out");
            nav.removeClass('active')
        }
    });
    // 나중에 에러 뜰수도 있는데, 작동하고나면 멈춰! 한번 해줘야함

    // main_menu 안에 submenu가 존제할 때 nav에 클레스 active를 붙여라! 아니면 안붙여도 된다. 로 풀면 좋을 것 같음.






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