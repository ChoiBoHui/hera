// 제이쿼리로 작업중임.. 자스랑 섞어 쓰면 에러남..!
$(function () {
    //스크롤 시 메뉴 변경 Start
    $(window).on('scroll', function () {
        // console.log('scrolld')
        var topmenu = $('.header .topmenu');
        // var gnb = $('.header .gnb');
        // var nav = $('.header .nav');
        var sch = $(window).scrollTop();
        // console.log(sch);

        if (sch > 100) {
            topmenu.addClass('scroll');
        } else {
            topmenu.removeClass('scroll');
        }
    });
    //스크롤 시 메뉴 변경 End

    // 새로고침후 스크롤 위치 인식 Start
    window.onload = function () {
        var sch = $(window).scrollTop();
        var topmenu = $('.header .topmenu');
        console.log("[window 이벤트를 최초 실행 합니다!]");
        console.log(sch);
        if (sch > 100) {
            topmenu.addClass('scroll');
        } else {
            topmenu.removeClass('scroll');
        }
    }
    // 새로고침후 스크롤 위치 인식 End

    // 서브메뉴가 열려 있을 때 스크롤하면 닫히게
    $(window).on('scroll', function () {
        $(".gnbCurtain").removeClass("active")
        $(".nav .main_menu>li").removeClass("active")
        $('.globalnav_searchfield').removeClass("open");
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



    // 서치폼 Start
    let gnbSearchField = $('.globalnav_searchfield');
    let searchTextArea = $('.globalnav_searchfield-input');
    let searchReset = $('.globalnav_searchfield-reset');
    let searchClose = $('.globalnav_searchfield-close');

    $('.search_icon_area').on('click', function () {
        gnbSearchField.addClass("open");
        $('.gnbCurtain').addClass("active");
        // 지금은 gnbCurtain만 스크롤하면 닫히게 돼 있어서 어긋나는 경우가 있음.
    });
    // 서치폼 닫기 버튼
    searchClose.on('click', function () {
        searchTextArea.val('');
        searchReset.attr("disabled", "aria-hidden = true").css({ opacity: '0', visibility: 'hidden' });
        gnbSearchField.removeClass("open");
        $('.gnbCurtain').removeClass("active");
    });

    gnbSearchField.on('mouseleave', function () {
        // 검색필드에서 마우스가 떠났을때
        // 1) 검색어 입력창 value 초기화 하기
        // 2) 리셋버튼 삭제하기
        // 3) 서치필드 클레스 없애기
        // 4) gnb커튼 클레스 없애기
        searchTextArea.val('');
        searchReset.attr("disabled", "aria-hidden = true").css({ opacity: '0', visibility: 'hidden' });
        gnbSearchField.removeClass("open");
        // 서치필드 닫히는거 스르륵 닫히게 수정 할 것!!
        // 생각해보니까 그러면 리셋버튼도 그냥 addClass, removeClass 써서 작동하게 하면 되지 않을까?
        $('.gnbCurtain').removeClass("active");
    });
    // 검색창이 닫혔다가 다시 창이 열릴때 검색어 입력창 및 기타 옵션 모두 초기화


    searchTextArea.on('keyup focus', function () {
        searchReset.removeAttr("disabled", "aria-hidden = true").css({ opacity: '1', visibility: 'visible' });
        // console.log(searchTextArea.val());
        // apple 에서는 attr이랑 css값 둘 다 사용하던데 이유가 있을까..?
        if ($(this).val().length == 0) {
            searchReset.attr("disabled", "aria-hidden = true").css({ opacity: '0', visibility: 'hidden' });
        } else {
            searchReset.removeAttr("disabled", "aria-hidden = true").css({ opacity: '1', visibility: 'visible' });
        }

    });
    // 검색어 입력창에 포커스 됐거나 텍스트가 입력됐을때 리셋 버튼 조작

    // searchTextArea.on('blur', function () {
    //     searchReset.attr("disabled", "aria-hidden = true").css({ opacity: '0', visibility: 'hidden' });
    // });
    // 검색어 입력창에서 포커스가 해제 됐을 때 리셋 버튼 숨김
    // 이 부분은 서치폼에서는 필요 없음, 회원가입 폼에서는 생각해봐야 할 부분
    // blur를 사용하면 리셋이 안먹음.. blur가 아니라 다른 방법을 찾아봐야 할수도..?

    searchReset.on('click touchstart', function () {
        // alert('초기화!');
        searchTextArea.val('');
        searchReset.attr("disabled", "aria-hidden = true").css({ opacity: '0', visibility: 'hidden' });
        return false;
    });
    // 리셋 버튼 클릭 시 input value 삭제 후 버튼 숨김

    // 추천 검색어도 hidden으로 넣어줘야하나?
    // => 이렇게되면 추천검색어를 클릭 하면 자동으로 submit 버튼이 클릭된 걸로 인식(=> 추천 검색어가 인풋 텍스트 창 value로 입력되게끔 하면 되지 않을까?)
    // 서치폼 End (submit(input type: hidden) 부분 제일 하단에 추가 있음)




    // main_visual 슬라이더 Start
    // 시작시 함수 한번 초기화 해주는거!! 수빈이가 알려준거 써서 슬라이더 처음부터 제대로 돌아가게 해야함..!
    // 온 로드 됐을때 페이저 부분 움직이게 하는 방법 사용 추천(위에 스크롤 gnb 해결한 방법이랑 같음)
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

function check() {
    let searchfrm = document.searchfrm;
    // 폼태그의 name
    let searchValue = searchfrm.searchInput.value;
    // 서치 인풋의 name

    console.log(searchValue);
    // 확인
    searchfrm.src.value = searchValue;
    // 여기 src가 index에 있는 hidden(name) 임
    console.log(searchfrm.src.value);
    // 확인
    // alert(searchfrm.src.value);

    // 이후 액션은 개발자 부분
    return false;
    // 폼태그 for, name이 하는 일을 확실하게 복습 할 것!!
}