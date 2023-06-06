// 제이쿼리로 작업중임.. 자스랑 섞어 쓰면 에러남..!
$(function () {
    // 스크롤바 width를 제외하고 1200px 이하이면 적용 된다.
    // 보통은 1024에 768
    console.log("[window 이벤트를 최초 실행합니다!]");

    //스크롤 시 메뉴 변경
    // function headerScrollEvent() {
    //     let WW = $(window).innerWidth();

    //     if (WW >= 1200) {
    //         const topmenu = $('.header .topmenu');
    //         let sch = $(window).scrollTop();
    //         if (sch > 100) {
    //             topmenu.addClass('scroll');
    //         } else {
    //             topmenu.removeClass('scroll');
    //         }

    //         // 서브메뉴가 열려 있을 때 스크롤하면 닫히게
    //         $(".gnbCurtain").removeClass("active")
    //         $(".nav .main_menu>li").removeClass("active")
    //         $('.globalnav_searchfield').removeClass("open");

    //     } else {
    //         const topmenu = $('.header .topmenu');
    //         let sch = $(window).scrollTop();
    //         if (sch > 38) {
    //             topmenu.addClass('scroll');
    //         } else {
    //             topmenu.removeClass('scroll');
    //         }
    //     }
    //     // 위에는 새로고침 했을 때!
    //     // 아래는 스크롤 이벤트

    //     $(window).on('scroll', function () {
    //         let WW = $(window).innerWidth();

    //         if (WW >= 1200) {
    //             const topmenu = $('.header .topmenu');
    //             let sch = $(window).scrollTop();
    //             if (sch > 100) {
    //                 topmenu.addClass('scroll');
    //             } else {
    //                 topmenu.removeClass('scroll');
    //             }

    //             // 서브메뉴가 열려 있을 때 스크롤하면 닫히게
    //             $(".gnbCurtain").removeClass("active")
    //             $(".nav .main_menu>li").removeClass("active")
    //             $('.globalnav_searchfield').removeClass("open");

    //         } else {
    //             const topmenu = $('.header .topmenu');
    //             let sch = $(window).scrollTop();
    //             if (sch > 38) {
    //                 topmenu.addClass('scroll');
    //             } else {
    //                 topmenu.removeClass('scroll');
    //             }
    //         }
    //     });
    // };


    // 스크롤 이벤트 핸들러 수정
    function headerScrollEvent() {
        let WW = $(window).innerWidth();

        if (WW >= 1200) {
            $(window).on('scroll', function () {
                const topmenu = $('.header .topmenu');
                let sch = $(window).scrollTop();
                if (sch > 100) {
                    topmenu.addClass('scroll');
                } else {
                    topmenu.removeClass('scroll');
                };

                // 서브메뉴가 열려 있을 때 스크롤하면 닫히게
                // $(".gnbCurtain").removeClass("active")
                // $(".nav .main_menu>li").removeClass("active")
                // $('.globalnav_searchfield').removeClass("open");
            });
        } else {
            $(window).on('scroll', function () {
                const topmenu = $('.header .topmenu');
                let sch = $(window).scrollTop();
                if (sch > 38) {
                    topmenu.addClass('scroll');
                } else {
                    topmenu.removeClass('scroll');
                };
            });

            // 모바일 스크롤 이벤트 꺼주기(이유 : 아이폰과 안드로이드에서 input type: text에 입력하기위해 키보드가 나타났을때 작동하는 방식이 다름. ios의 경우 가상요소를 생성해 막아둔 스크롤이 움직임... 최적화 방법 찾는중..)
            // $(".main_menu>li").off('mouseenter mouseleave').removeClass("active");
            // 위에 코드는 밑에 사용한 이벤트 off 예시로 참고하기위해서 주석으로 넣어둠.. (포폴제출전에 삭제해야함)

            // $(".gnbCurtain").off('scroll');
            // $(".nav .main_menu>li").off('scroll');
            // $('.globalnav_searchfield').off('scroll');

        };
        // 위에는 새로고침 했을 때!
        // 아래는 스크롤 이벤트

        // $(window).on('scroll', function () {
        //     let WW = $(window).innerWidth();

        //     if (WW >= 1200) {
        //         const topmenu = $('.header .topmenu');
        //         let sch = $(window).scrollTop();
        //         if (sch > 100) {
        //             topmenu.addClass('scroll');
        //         } else {
        //             topmenu.removeClass('scroll');
        //         }

        //         // 서브메뉴가 열려 있을 때 스크롤하면 닫히게
        //         $(".gnbCurtain").removeClass("active")
        //         $(".nav .main_menu>li").removeClass("active")
        //         $('.globalnav_searchfield').removeClass("open");

        //     } else {
        //         const topmenu = $('.header .topmenu');
        //         let sch = $(window).scrollTop();
        //         if (sch > 38) {
        //             topmenu.addClass('scroll');
        //         } else {
        //             topmenu.removeClass('scroll');
        //         }
        //     }
        // });
    };








    // 메뉴 호버 Start   
    function gnbHoverEvent() {
        let WW = $(window).innerWidth();
        if (WW >= 1200) {
            $(".main_menu>li").on({
                'mouseenter': function () {
                    if ($(this).has(".submenu").length > 0) {
                        let headerHiehgt = $(".header").innerHeight();
                        // console.log(headerHiehgt)
                        $(".gnbCurtain").addClass("active").css('top', headerHiehgt);
                    } else {
                        $(".gngnbCurtain").removeClass("active");
                    }
                    $(this).addClass("active").siblings().removeClass("active");
                },
                'mouseleave': function () {
                    $(".gnbCurtain").removeClass("active");
                    $(this).removeClass("active");
                }
            });

        } else {
            $(".main_menu>li").off('mouseenter mouseleave').removeClass("active");
            $(".gnbCurtain").removeClass("active");
        };
    };

    // 모바일 메인 메뉴 클릭 시 서브메뉴 open
    function submenuOpen() {
        let WW = $(window).innerWidth();
        if (WW < 1200) {
            $(".main_menu>li:nth-child(-n+4)>a").on('click', function (event) {
                event.preventDefault();
                if ($(this).parent().has(".submenu").length > 0) {
                    $(this).parent().addClass("open");
                    $(this).closest('li').find('.container').scrollTop(0);
                    // 같은 부모를 둔 .submenu의 스크롤을 초기화
                    $(".header .nav .menuHandler .menuBack").addClass("on");
                };
            });
            $(".header .nav .menuHandler .menuBack").on('click', function () {
                $(".main_menu>li").removeClass("open");
                $(".header .nav .menuHandler .menuBack").removeClass("on");
            });
        } else {
            $(".main_menu>li>a").off('click');
            $(".main_menu>li").removeClass("open");
            $(".header .nav .menuHandler .menuBack").removeClass("on");
        };
        // 아래는 responsiveMenu에 적용됐던 부분들인데, resize에 묶어서 넣으려고 여기 넣어둠
        $('html').css('overflow-y', '');
        $(".gnbCurtain").removeClass("active");
        $(".header .nav").removeClass("open");
    };

    // 반응형 메뉴 오픈시 스크롤막기, gnb커튼 작동
    function responsiveMenu() {
        $(".menutrigger").on('click', function () {
            $('html').css('overflow-y', 'hidden');
            $(".header .nav").addClass("open");
            $(".gnbCurtain").fadeIn().addClass("active");
        });
        $(".menuClose").on('click', function () {
            $('html').css('overflow-y', '');
            $(".header .nav").removeClass("open");
            $(".main_menu>li").removeClass("open");
            $(".header .nav .menuHandler .menuBack").removeClass("on");
            $(".gnbCurtain").fadeOut().removeClass("active");
        });
        $(".gnbCurtain").on('click', function () {
            $('html').css('overflow-y', '');
            $(".header .nav").removeClass("open");
            $(".main_menu>li").removeClass("open");
            $(".header .nav .menuHandler .menuBack").removeClass("on");
            $(".gnbCurtain").fadeOut().removeClass("active");
        });
    };
    // 보니까 fadein, out 을 사용하면 resize 할때 gnbCurtain display에 문제가 생김. 그래서 css 에 !important 추가해줬음

    // topbanner 슬라이더 Start
    function topbannerEvent() {
        $('.banner_slider').slick({
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000
        });

        // 슬라이더 버튼
        $('.topbanner .area_left').on('click', function () {
            $('.banner_slider').slick('slickPrev')
        });
        $('.topbanner .area_right').on('click', function () {
            $('.banner_slider').slick('slickNext')
        });
    };

    // 서치폼 Start
    function searchForm() {
        let gnbSearchField = $('.globalnav_searchfield');
        let searchTextArea = $('.globalnav_searchfield-input');
        let searchReset = $('.globalnav_searchfield-reset');
        let searchClose = $('.globalnav_searchfield-close');
        let searchSubmit = $('.globalnav_searchfield-submit');

        // 서치폼 닫기 버튼
        searchClose.on('click', function () {
            searchTextArea.val('');
            searchReset.attr("disabled", "aria-hidden = true").css({ opacity: '0', visibility: 'hidden' });
            gnbSearchField.removeClass("open");
            $('.gnbCurtain').removeClass("active");

            // 반응형일 때만 작동
            $('html').css('overflow-y', '');
            $('body').css('overflow-y', '');
        });

        searchTextArea.on('focus', function () {
            searchSubmit.addClass('on');
        });
        searchTextArea.on('blur', function () {
            searchSubmit.removeClass('on');
        });

        // 검색어 입력창에 포커스 됐거나 텍스트가 입력됐을때 리셋 버튼 조작
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

        // 리셋 버튼 클릭 시 input value 삭제 후 버튼 숨김
        searchReset.on('click touchstart', function () {
            // alert('초기화!');
            searchTextArea.val('').focus();
            searchReset.attr("disabled", "aria-hidden = true").css({ opacity: '0', visibility: 'hidden' });
            return false;
        });
    };

    // 검색창이 닫혔다가 다시 창이 열릴때 검색어 입력창 및 기타 옵션 모두 초기화
    function srfResponsiveEvent() {
        let gnbSearchField = $('.globalnav_searchfield');
        let searchTextArea = $('.globalnav_searchfield-input');
        let searchReset = $('.globalnav_searchfield-reset');
        let WW = $(window).innerWidth();

        $('.search_icon_area').on('click', function () {
            gnbSearchField.addClass("open");
            $('.gnbCurtain').addClass("active");

            // 크로스 브라우징 검색창 이슈!!
            if (WW >= 1200) {
                $('html').css('overflow-y', '');
                $('body').css('overflow-y', '');
                // searchTextArea.attr('autofocus', 'autofocus');
                searchTextArea.focus();
            } else {
                $('html').css('overflow-y', 'hidden');
                $('body').css('overflow-y', 'hidden');
                // searchTextArea.removeAttr("autofocus");
                // searchTextArea.blur();
                searchTextArea.focus();
            };
        });

        if (WW >= 1200) {
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
        } else {
            // 모바일의 경우, mouseleave 이벤트를 막고 닫기 버튼 클릭 시, 검색어 입력창 및 기타 옵션 모두 초기화
            gnbSearchField.off('mouseleave');
            $('.gnbCurtain').on('click', function () {
                searchTextArea.val('');
                searchReset.attr("disabled", "aria-hidden = true").css({ opacity: '0', visibility: 'hidden' });
                gnbSearchField.removeClass("open");
                $('.gnbCurtain').removeClass("active");
                $('html').css('overflow-y', '');
                $('body').css('overflow-y', '');
            });
        };

        // 리사이즈 됐을때 검색창 닫기
        gnbSearchField.removeClass("open");
        // gnb 커튼 리사이즈 됐을때 닫히는건 다른데 포함돼 있음.
    };



    // 함수 호출
    headerScrollEvent();
    gnbHoverEvent();
    submenuOpen();
    responsiveMenu(); //모바일 전용 메뉴라 리사이즈 필요 없음
    topbannerEvent(); //탑배너는 리사이즈 필요 없음
    searchForm(); //리사이즈 필요한 부분 아래 함수로 따로 만들었음
    srfResponsiveEvent();
    mainVisualSlider(); //리사이즈 필요 없음
    bestSlider(); //리사이즈 필요 없음
    snsModal();

    // 리사이즈 됐을 때
    $(window).on('resize', function () {
        headerScrollEvent();
        gnbHoverEvent();
        submenuOpen();
        srfResponsiveEvent();
    });




    // main_visual 슬라이더 Start
    function mainVisualSlider() {
        // 시작시 함수 한번 초기화 해주는거!! 수빈이가 알려준거 써서 슬라이더 처음부터 제대로 돌아가게 해야함..!
        // 온 로드 됐을때 페이저 부분 움직이게 하는 방법 사용 추천(위에 스크롤 gnb 해결한 방법이랑 같음)
        $('.main_slider').slick({
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000,
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
    };
    // main_visual 슬라이더 End


    // best 슬라이더 Start
    function bestSlider() {
        $('.best .product_slider').slick({
            arrows: false,
            autoplay: false,
            dots: true,
            dotsClass: 'custom-dots',
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 4,
            variableWidth: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        variableWidth: false,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        variableWidth: false,
                    }
                }
            ]
        });
        // 반응형 작성 했는데, 리사이즈 됐을 때 다시 안돌아와서 리사이즈에 함수 집어 넣어야 함

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
    };
    // best 슬라이더 End


    // snsModal Start
    function snsModal() {
        // 모달 닫기
        $('.snsModal .modalCloseBtn').on('click', function () {
            $('.snsModal').fadeOut();
            $('.snsModal').removeClass('open');
        });

        // 모달 오픈
        // 퍼블 과정에서는 형태만 만들어져 있지만, 개발 과정에서 각 아이템에 맞는 번호를 찾아서 띄워주는 형식으로 진행됨 (=> 배열 활용해서 흉내 내볼 수 있지 않을까?)
        $('.snsitm').on('click', function () {
            $('.snsModal').fadeIn();
            $('.snsModal').addClass('open');
        });
    };
    // snsModal End




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
    alert("입력하신 겁색어는 " + searchfrm.src.value);
    // submit 버튼 작동 확인용
    // 어차피 창 넘어갈꺼니까 input 값 초기화 안함

    // 이후 액션은 개발자 부분
    return false;
    // 폼태그 for, name이 하는 일을 확실하게 복습 할 것!!
};