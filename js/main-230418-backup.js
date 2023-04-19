// 제이쿼리로 작업중임.. 자스랑 섞어 쓰면 에러남..!
$(function () {
    //스크롤 시 메뉴 변경 Start

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

    //스크롤 시 메뉴 변경 End

    // 서브메뉴가 열려 있을 때 스크롤하면 닫히게
    $(window).on('scroll', function () {
        $(".nav").removeClass("active")
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

    // topbanner popup close 버튼 쿠키 작업
    // var getCookie = $.cookie('popup');
    // var date = new Date();
    // date.setTime(date.getTime() + 60 * 60 * 1000);

    // // if (!getCookie) {
    // //     $('.popup').show();
    // // }
    // // $('.popup .close_btn').on('click', function () {
    // //     $.cookie('popup', 'value', { expires: 1 });
    // //     $('.popup').hide();
    // // });

    // console.log(date)
    // // console.log($.cookie('popup'));


    // if (!getCookie) {
    //     $('.popup').show();
    // }
    // $('.popup .close_btn').on('click', function () {
    //     $.cookie('popup', 'value', { expires: date });
    //     $('.popup').hide();
    // });
    // //출처: https://offbyone.tistory.com/176 [쉬고 싶은 개발자:티스토리]


    var toggleMainPopup = function () {

        /* 스토리지 제어 함수 정의 */
        var handleStorage = {
            // 스토리지에 데이터 쓰기(이름, 만료일)
            setStorage: function (name, exp) {
                // 만료 시간 구하기(exp를 ms단위로 변경)
                var date = new Date();
                // date = date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
                date = date.setTime(date.getTime() + exp * 60 * 1000);

                // 로컬 스토리지에 저장하기
                // (값을 따로 저장하지 않고 만료 시간을 저장)
                localStorage.setItem(name, date)
            },
            // 스토리지 읽어오기
            getStorage: function (name) {
                var now = new Date();
                now = now.setTime(now.getTime());
                // 현재 시각과 스토리지에 저장된 시각을 각각 비교하여
                // 시간이 남아 있으면 true, 아니면 false 리턴
                return parseInt(localStorage.getItem(name)) > now
            }
        };


        // 쿠키 읽고 화면 보이게
        if (handleStorage.getStorage("today")) {
            $(".popup").removeClass("on");
        } else {
            $(".popup").addClass("on");
        }

        // 오늘하루 보지 않기 버튼
        $(".popup").on("click", ".close_btn", function () {
            // 로컬 스토리지에 today라는 이름으로 1일(24시간 뒤) 동안 보이지 않게
            handleStorage.setStorage("today", 1);
            $(this).parents(".popup.on").removeClass("on");
        });
    }

    $(function () {
        toggleMainPopup();
    });
    // 출처 : https://songsong.dev/entry/%EC%98%A4%EB%8A%98-%ED%95%98%EB%A3%A8-%EB%B3%B4%EC%A7%80-%EC%95%8A%EA%B8%B0-%ED%8C%9D%EC%97%85-%EB%A7%8C%EB%93%A4%EA%B8%B0





    // topbanner 슬라이더 End



    // 메뉴 호버 Start
    // let main_menu = $('.header .main_menu');
    // let nav = $('.nav');

    // $(main_menu).on({
    //     "mouseover": function () {
    //         // console.log("Mouse Over");
    //         nav.addClass('active')
    //     },
    //     "mouseout": function () {
    //         // console.log("Mouse Out");
    //         nav.removeClass('active')
    //     }
    // });
    // 나중에 에러 뜰수도 있는데, 작동하고나면 멈춰! 한번 해줘야함

    // main_menu 안에 submenu가 존제할 때 nav에 클레스 active를 붙여라! 아니면 안붙여도 된다. 로 풀면 좋을 것 같음.

    // let main_menu = $('.header .main_menu');
    // let nav = $('.nav');
    // let has_submenu = $('.header .main_menu>li')

    // $(main_menu).on({
    //     "mouseover": function () {
    //         if (has_submenu.find('submenu')) {
    //             nav.addClass('active')
    //         }
    //         else {
    //             nav.removeClass('active')
    //         }
    //     },
    //     "mouseout": function () {
    //         // console.log("Mouse Out");
    //         nav.removeClass('active')
    //     }
    // });


    // let headerHiehgt = $(".header").innerHeight();
    // 처음 dom형성시 탑배너가 display : none;이기 때문에 topbanner를 제외한 topmenu의 높이값만을 가져옴.
    // 그리고 높이값이 변경됨에따라 변하지 않고, 한번 고정된 값을 계속해서 가져감. => 중간에 topbanner를 닫아도 그만큼의 높이가 빠지지 않음
    // console.log(headerHiehgt)
    // let activeCurtain = $(".header .gnbCurtain.active");
    // let positionCurtain = $(activeCurtain).position;
    // .gnbCurtain에 .active가 붙을 때, .gnbCurtain의 top값이 .header의 height값이 된다.

    // 


    $(".main_menu>li").on({
        "mouseenter": function () {
            if ($(this).has(".submenu").length > 0) {
                let headerHiehgt = $(".header").innerHeight();
                console.log(headerHiehgt)
                $(".gnbCurtain").addClass("active").css('top', headerHiehgt);
            }
            $(this).addClass("active");
        },
        "mouseleave": function () {
            $(".gnbCurtain").removeClass("active");
            $(this).removeClass("active");
        }
    });

    // $(positionCurtain).css('top', headerHiehgt);
    // console.log(positionCurtain.top)
    // 해당 메뉴 호버 부분은 chat GPT를 참고해서 코드를 작성하였음.

    // .gnbCurtain의 top, hegith값을 header높이가 변경됨에 따라 반응하게 하기.
    // .gnbCurtain의 top값이 .main_menu>li에 hover될 때 마다 .header의 높이값에 맞춰 변경


    // after 요소의 높이값 수정하기(실패 -> 계획 변경 span태그 활용한 내용 위쪽)
    // console.log($(".header").innerHeight());
    // let headerHiehgt = $(".header").innerHeight();
    // console.log(headerHiehgt);

    // let navAfter = $(".header .nav.active::after").position();
    // console.log(navAfter.top);



    // var $navAfter = $(".header .nav::after");
    // var afterTop = $navAfter.position();
    // ::after요소의 top값은 파악이 불가능 한 듯?

    // console.log(afterTop.top);

    // $(".main_menu>li").on({
    //     "mouseenter": function () {
    //         console.log(afterTop.top);
    //     }
    // });

    // $(".header .nav.active::after").css("top", "200px");

    // after요소는 DOM에 속해있지 않아 선택이 불가능함.

    // 메뉴 호버 End




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
        // console.log(e, s, c);
        $('.slide_util .slide_pager .current_index').text("0" + (c ? c + 1 : 1))
        $('.slide_util .slide_pager .bar_progress').addClass('on')
    });

    $('.main_slider').on('beforeChange', function () {
        $('.slide_util .slide_pager .bar_progress').removeClass('on')
    });
    // main_visual 슬라이더 End

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
    // best 슬라이더 End

})