// 제이쿼리로 작업중임.. 자스랑 섞어 쓰면 에러남..!
$(function () {
    //스크롤 시 메뉴 변경 Start

    $(window).on('scroll', function () {
        // console.log('scrolld')
        var topmenu = $('.header .topmenu');
        // var gnb = $('.header .gnb');
        // var nav = $('.header .nav');
        var sch = $(window).scrollTop();
        console.log(sch);

        if (sch > 100) {
            topmenu.addClass('scroll');
        } else {
            topmenu.removeClass('scroll');
        }
    });
    // 우선 보이는 상태로 css 먼저 작업 후 진행
    // 여기 나중에 새로고침 했을 때, 리사이즈 함수를 쓰던지 해서 스크롤값이 100보다 크면 자동으로 클레스 scroll 붙겠끔 수정해야함

    //스크롤 시 메뉴 변경 End

    // 서브메뉴가 열려 있을 때 스크롤하면 닫히게
    $(window).on('scroll', function () {
        $(".gnbCurtain").removeClass("active")
        $(".nav .main_menu>li").removeClass("active")
    });

    // topbanner 슬라이더 Start
    $('.banner_slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        // useTransform: false,
    });

    // 슬라이더 버튼
    $('.topbanner .area_left').on('click', function () {
        $('.banner_slider').slick('slickPrev')
    });
    $('.topbanner .area_right').on('click', function () {
        $('.banner_slider').slick('slickNext')
    });



    // 메뉴 호버 Start   
    // 추후에 탑배너와 같은 다른 요소들이 추가될 경우를 생각해서
    // .gnbCurtain의 top값을 header높이가 변경됨에 따라 반응하게 하기.
    // .gnbCurtain의 top값이 .main_menu>li에 hover될 때 마다 .header의 높이값에 맞춰 변경
    // let headerHiehgt = $(".header").innerHeight();
    // 처음 dom형성시 탑배너가 display : none;이기 때문에 topbanner를 제외한 topmenu의 높이값만을 가져옴.
    // 그리고 높이값이 변경됨에따라 변하지 않고, 한번 고정된 값을 계속해서 가져감. => 중간에 topbanner를 닫아도 그만큼의 높이가 빠지지 않음
    // console.log(headerHiehgt)
    // let activeCurtain = $(".header .gnbCurtain.active");
    // let positionCurtain = $(activeCurtain).position;
    // .gnbCurtain에 .active가 붙을 때, .gnbCurtain의 top값이 .header의 height값이 된다.
    $(".main_menu>li").on({
        "mouseenter": function () {
            if ($(this).has(".submenu").length > 0) {
                let headerHiehgt = $(".header").innerHeight();
                // console.log(headerHiehgt)
                $(".gnbCurtain").addClass("active").css('top', headerHiehgt);
            } else {
                $(".gngnbCurtain").removeClass("active");
            }
            $(this).addClass("active").siblings().removeClass("active");
        },
        "mouseleave": function () {
            $(".gnbCurtain").removeClass("active");
            $(this).removeClass("active");
        }
    });
    // 위의 메뉴 호버 부분은 chat GPT를 참고해서 코드를 작성하였음.
    // 


    // $(".main_menu>li").mouseenter(function () {
    //     let submenu = $(".main_menu>li>a").siblings(".submenu").length;
    //     let headerHiehgt = $(".header").innerHeight();
    //     console.log(submenu)

    //     $(this).addClass("active").siblings().removeClass("active");

    //     if (submenu > 0) {
    //         $(".gnbCurtain").addClass("active").css('top', headerHiehgt);
    //     } else {
    //         $(".gnbCurtain").removeClass("active");
    //     }
    // });

    // $(".main_menu").mouseleave(function () {
    //     $(".main_menu li").removeClass("active");
    //     $(".gnbCurtain").removeClass("active");
    // });
    // 미선이언니한테 이부분에서 오류가 난다고 확인 부탁드리기!

    // 메뉴 호버 End





    // main_visual 슬라이더 Start
    // 시작시 함수 한번 초기화 해주는거!! 수빈이가 알려준거 써서 슬라이더 처음부터 제대로 돌아가게 해야함..!
    $('.main_slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        // useTransform: false,
        pauseOnFocus: false,
        pauseOnHover: false,
    });
    $('.main_slider').on('afterChange', function (e, s, c) {
        // console.log(e, s, c);
        $('.slide_util .slide_pager .current_index').text("0" + (c ? c + 1 : 1))
        $('.slide_util .slide_pager .bar_progress').addClass('on')
    });

    $('.main_slider').on('beforeChange', function () {
        $('.slide_util .slide_pager .bar_progress').removeClass('on')
    });

    // 슬라이더 버튼
    $('.switch').on('click', function () {
        $(this).toggleClass("stop");
    })
    $('.main_visual .slide_util .control_btn .pause').on('click', function () {
        $('.main_slider').slick('slickPause')
    });
    $('.main_visual .slide_util .control_btn .play').on('click', function () {
        $('.main_slider').slick('slickPlay')
    });


    $('.main_visual .slide_util .control_btn .prev').on('click', function () {
        $('.main_slider').slick('slickPrev')
    });
    $('.main_visual .slide_util .control_btn .next').on('click', function () {
        $('.main_slider').slick('slickNext')
    });
    // main_visual 슬라이더 End


    // best 슬라이더 Start
    $('.best .product_slider').slick({
        arrows: false,
        autoplay: false,
        // useTransform: false,
        dots: true,
        // appendDots: $('.best .product_slider .dots'),
        dotsClass: 'custom-dots',
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        variableWidth: true,
    });

    // 슬라이더 버튼
    $('.best .product_slide_arrows .btn_area.left .hoverArea').on('click', function () {
        $('.product_slider').slick('slickPrev')
    });
    $('.best .product_slide_arrows .btn_area.right .hoverArea').on('click', function () {
        $('.product_slider').slick('slickNext')
    });

    // 슬라이드 위치에 따른 버튼 활성화
    let bestSlideFirstItm = $(".best .product_slider .itm01");
    let bestSlideLastItm = $(".best .product_slider .itm12");
    let btnAreaLeft = $(".best .product_slide_arrows .btn_area.left");
    let btnAreaRight = $(".best .product_slide_arrows .btn_area.right");

    $('.best .product_slider').on('afterChange', function () {
        if (bestSlideFirstItm.hasClass("slick-active")) {
            btnAreaLeft.addClass('hide');
            // console.log("y");
        } else {
            btnAreaLeft.removeClass('hide');
            // console.log("n");
        }

        if (bestSlideLastItm.hasClass("slick-active")) {
            btnAreaRight.addClass('hide');
        } else {
            btnAreaRight.removeClass('hide');
        }
    });

    $('.best_itm .thumbnail_area .cmlink_btn .addWishlist').on('click', function () {
        $(this).toggleClass('plusWish');
    });
    // best 슬라이더 End






});