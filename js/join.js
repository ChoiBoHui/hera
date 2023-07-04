$(function () {


    // footer 언어 설정 Start
    function footerLanguage() {
        $('.footer .footer_utils .language').on('click', function () {
            $('.footer .footer_utils .languageLink').slideToggle().toggleClass('open');
            $(this).toggleClass('open');
        })
    }; footerLanguage();
    // footer 언어 설정 End

    // input 포커스 이벤트
    function inputFocusEvent() {
        // let joinAreaLabel = $('.movelabel .join_title label');
        // let joinAreaInput = $('.movelabel .ps_box input');
        let joinAreaInput = $('.ps_box input');

        // 검색어에 값이 있을때
        joinAreaInput.on('focus', function () {
            // $(this).siblings('.join_title label').removeClass('off').addClass('on');
            $(this).closest('.movelabel').find('.join_title label').removeClass('off').addClass('on');
            $(this).closest('.ps_box').addClass('focus');
        });

        joinAreaInput.on('blur', function () {
            if ($(this).val().length == 0) {
                $(this).closest('.movelabel').find('.join_title label').removeClass('on').removeClass('off');
                $(this).closest('.ps_box').removeClass('focus');
                // console.log(this.value);
            } else {
                $(this).closest('.movelabel').find('.join_title label').removeClass('on').addClass('off');
                $(this).closest('.ps_box').removeClass('focus');
                // console.log(this.value);
            };
        });
    };
    inputFocusEvent();


    function sectionId() {
        // Section id 아이디
        let error = $('.id_area .error_next_box');
        let condition1 = $('.idCondition .condition1');
        let condition2 = $('.idCondition .condition2');
        let id = $('#id');
        let checkIcon1 = $('.idCondition .condition1 span');
        let checkIcon2 = $('.idCondition .condition2 span');

        id.on("input", function () {
            checkId();
            checkLength();
            checkCharacter();
        });


        function checkId() {
            if (id.val() === "") {
                error.html("! 필수 정보입니다.");
                error.css("display", "block");
            } else {
                error.css("display", "none");
            }
        };

        function checkLength() {
            let lengthPattern = /^.{5,20}$/;
            if (!lengthPattern.test(id.val())) {
                condition1.css("color", "#d30005");
                checkIcon1.addClass('red').removeClass('green');
            } else {
                condition1.css("color", "#08A600");
                checkIcon1.addClass('green').removeClass('red');
            }
        };

        function checkCharacter() {
            let characterPattern = /^[a-zA-Z0-9_-]*$/;
            if (!characterPattern.test(id.val())) {
                condition2.css("color", "#d30005");
                checkIcon2.addClass('red').removeClass('green');
            } else {
                condition2.css("color", "#08A600");
                checkIcon2.addClass('green').removeClass('red');
            }
        };
    };
    sectionId();


    function sectionPw() {
        // 비밀번호 pw
        let pw1 = $('#pswd1');
        let error = $('.pswd1_area .error_next_box');
        let condition1 = $('.pwCondition .condition1');
        let condition2 = $('.pwCondition .condition2');
        let checkIcon1 = $('.pwCondition .condition1 span');
        let checkIcon2 = $('.pwCondition .condition2 span');


        pw1.on("input", function () {
            checkPw();
            checkLength();
            checkCharacter();
            checkPw2();
        });

        function checkPw() {
            if (pw1.val() === "") {
                error.html("! 필수 정보입니다.");
                error.css("display", "block");
            } else {
                error.css("display", "none");
            }
        };

        function checkLength() {
            let lengthPattern = /^.{8,}$/;
            if (!lengthPattern.test(pw1.val())) {
                condition1.css("color", "#d30005");
                checkIcon1.addClass('red').removeClass('green');
            } else {
                condition1.css("color", "#08A600");
                checkIcon1.addClass('green').removeClass('red');
            }
        };

        function checkCharacter() {
            // const characterPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,}$/;
            const characterPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()])/

            if (!characterPattern.test(pw1.val())) {
                condition2.css("color", "#d30005");
                checkIcon2.addClass('red').removeClass('green');
            } else {
                condition2.css("color", "#08A600");
                checkIcon2.addClass('green').removeClass('red');
            }
        }

        // 비밀번호 pw
        let pw2 = $('#pswd2');
        let error2 = $('.pswd2_area .error_next_box');

        pw2.on("input", function () {
            checkPw2();
        });

        function checkPw2() {
            if (pw2.val() !== pw1.val()) {
                error2.html("! 비밀번호가 일치하지 않습니다.").css({
                    color: "#d30005",
                    display: "block"
                });
            } else {
                error2.css("display", "none");
            }
        };

    };
    sectionPw();

    function joinDatepicker() {
        $('.datepicker').datepicker({
            dateFormat: 'yy-mm-dd',
            prevText: '이전 달',
            nextText: '다음 달',
            monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            dayNames: ['일', '월', '화', '수', '목', '금', '토'],
            dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
            dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
            showOtherMonths: true, //빈 공간에 현재월의 앞뒤월의 날짜를 표시
            showMonthAfterYear: true, // 월- 년 순서가아닌 년도 - 월 순서
            changeYear: true, //option값 년 선택 가능
            changeMonth: true, //option값  월 선택 가능
            showOn: "both", //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시
            // buttonImage: "../img/join/calendar.svg", //버튼 이미지 경로
            buttonImage: "https://choibohui.github.io/hera/img/join/icon_calendar.svg", //버튼 이미지 경로
            buttonImageOnly: true, //버튼 이미지만 깔끔하게 보이게함
            buttonText: "선택", //버튼 호버 텍스트
            yearSuffix: '년',
            // minDate: "-5Y", //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
            // maxDate: "+5y", //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)
            // minDate: new Date('1996-12-01'),
            minDate: '-100y',
            maxDate: 0, //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)
            yearRange: 'c-100:c+0', // 년도 선택 셀렉트박스를 현재 년도에서 이전, 이후로 얼마의 범위를 표시할것인가.
        });
        //초기값을 오늘 날짜로 설정해줘야 합니다.
        // $(".datepicker").datepicker("setDate", "today"); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)
    };
    joinDatepicker();


});


function checkJoin() {

    let idCharacterPattern = /^[a-zA-Z0-9_-]{5,20}$/;
    let pwCharacterPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,}$/;

    const idVal = $("#id").val();
    const pw1Val = $("#pswd1").val();
    const pw2Val = $("#pswd2").val();
    const nameVal = $("#name").val();
    const birthVal = $("#birth").val();
    // const genderVal = $("#gender").val();
    const phoneNoVal = $("#phoneNo").val();



    // 아이디 검수
    if (!idVal) {
        alert("아이디를 입력해 주세요.");
        $("#id").focus();
        return false;
    }
    if (!idCharacterPattern.test(idVal)) {
        alert("아이디는 5자 이상, 영문, 숫자와 특수기호( _ ),( - )만 사용할 수 있습니다.");
        $("#id").focus();
        return false;
    }

    // 비밀번호 1차 검수
    if (!pw1Val) {
        alert("비밀번호를 입력해 주세요.");
        $("#pswd1").focus();
        return false;
    }
    if (!pwCharacterPattern.test(pw1Val)) {
        alert("비밀번호는 8자 이상, 영문 소문자, 대문자, 숫자, 특수문자를 모두 포함해야 합니다.");
        $("#pswd1").focus();
        return false;
    }
    // 비밀번호 2차 검수
    if (!pw2Val) {
        alert("재확인 비밀번호를 입력해 주세요.");
        $("#pswd2").focus();
        return false;
    }
    if (pw1Val !== pw2Val) {
        alert("비밀번호가 같지 않습니다. 다시 입력해주세요.");
        $("#pswd2").focus();
        return false;
    }

    // 이름 검수
    if (!nameVal) {
        alert("이름을 입력해 주세요.");
        $("#name").focus();
        return false;
    }

    // 생년월일 검수
    if (!birthVal) {
        alert("생년월일을 입력해 주세요.");
        $("#birth").focus();
        return false;
    }

    // 휴대전화 검수
    if (!phoneNoVal) {
        alert("휴대전화 번호를 입력해 주세요.");
        $("#phoneNo").focus();
        return false;
    }

    alert("헤라의 회원이 되신 걸 환영합니다!");
    window.location.href = "./index.html";
    return false;

};