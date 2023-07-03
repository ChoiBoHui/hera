$(function () {

    // input 포커스 이벤트
    function inputFocusEvent() {
        let joinAreaLabel = $('.movelabel .join_title label');
        let joinAreaInput = $('.movelabel .ps_box input');

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
        $('.datepicker').datepicker();
        $.datepicker.setDefaults({
            dateFormat: 'yy-mm-dd',
            // maxDate: new Date('2017-12-31'),
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
            buttonImage:
                "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif", //버튼 이미지 경로
            buttonImageOnly: true, //버튼 이미지만 깔끔하게 보이게함
            buttonText: "선택", //버튼 호버 텍스트
            yearSuffix: '년',
            // minDate: "-5Y", //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
            minDate: new Date('1996-12-01'),
            maxDate: "+5y", //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)
        });
        //초기값을 오늘 날짜로 설정해줘야 합니다.
        $(".datepicker").datepicker("setDate", "today"); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)
    };
    joinDatepicker();

    //주민번호 확인 함수
    function check_jumin() {
        let jumins3 = $("#pnum").val() + $("#nnum").val();
        //주민등록번호 생년월일 전달

        let fmt = RegExp(/^\d{6}[1234]\d{6}$/)  //포멧 설정
        let buf = new Array(13);

        //주민번호 유효성 검사
        if (!fmt.test(jumins3)) {
            alert("주민등록번호 형식에 맞게 입력해주세요");
            $("#pnum").focus();
            return false;
        }

        //주민번호 존재 검사
        for (let i = 0; i < buf.length; i++) {
            buf[i] = parseInt(jumins3.charAt(i));
        }

        let multipliers = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];// 밑에 더해주는 12자리 숫자들 
        let sum = 0;

        for (let i = 0; i < 12; i++) {
            sum += (buf[i] *= multipliers[i]);// 배열끼리12번 돌면서 
        }

        if ((11 - (sum % 11)) % 10 != buf[12]) {
            alert("잘못된 주민등록번호 입니다.");
            $("#pnum").focus();
            return false;
        }

        let birthYear = (jumins3.charAt(6) <= "2") ? "19" : "20";
        birthYear += $("#pnum").val().substr(0, 2);
        let birthMonth = $("#pnum").val().substr(2, 2);
        let birthDate = $("#pnum").val().substr(4, 2);
        let birth = new Date(birthYear, birthMonth, birthDate);


        $("#year").val(birthYear);
        $("#month").val(birthMonth);
        $("#day").val(birthDate);
    };
    // check_jumin();




});



// 일단 긁어온거라서 아직 뭔지 확인 안했음
// function check() {
//     let getIntro = $("#intro").val().replace(/\s|/gi, '');
//     let hobbyCheck = false;
//     let getMail = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);
//     let getCheck = RegExp(/^[a-zA-Z0-9]{4,12}$/);
//     let getName = RegExp(/^[가-힣]+$/);
//     let fmt = RegExp(/^\d{6}[1234]\d{6}$/); //형식 설정
//     let buf = new Array(13); //주민등록번호 배열


//     //아이디 공백 확인
//     if ($("#tbID").val() == "") {
//         alert("아이디 입력바람");
//         $("#tbID").focus();
//         return false;
//     }

//     //이름의 유효성 검사
//     if (!getCheck.test($("#tbID").val())) {
//         alert("형식에 맞게 입력해주세요");
//         $("#tbID").val("");
//         $("#tbID").focus();
//         return false;
//     }

//     //비밀번호
//     if (!getCheck.test($("#tbPwd").val())) {
//         alert("형식에 맞춰서 PW를 입력해줘용");
//         $("#tbPwd").val("");
//         $("#tbPwd").focus();
//         return false;
//     }

//     //아이디랑 비밀번호랑 같은지
//     if ($("#tbID").val() == ($("#tbPwd").val())) {
//         alert("비밀번호가 ID와 똑같으면 안!대!");
//         $("#tbPwd").val("");
//         $("#tbPwd").focus();
//     }

//     //비밀번호 똑같은지
//     if ($("#tbPwd").val() != ($("#cpass").val())) {
//         alert("비밀번호가 틀렸네용.");
//         $("#tbPwd").val("");
//         $("#cpass").val("");
//         $("#tbPwd").focus();
//         return false;
//     }

//     //이메일 공백 확인
//     if ($("#mail").val() == "") {
//         alert("이메일을 입력해주세요");
//         $("#mail").focus();
//         return false;
//     }

//     //이메일 유효성 검사
//     if (!getMail.test($("#mail").val())) {
//         alert("이메일형식에 맞게 입력해주세요")
//         $("#mail").val("");
//         $("#mail").focus();
//         return false;
//     }

//     //이름 유효성
//     if (!getName.test($("#name").val())) {
//         alert("이름 똑띠 쓰세용");
//         $("#name").val("");
//         $("#name").focus();
//         return false;
//     }

//     //주민번호
//     if (($("#id_num").val() == "") || ($("#id_num_back").val() == "")) {
//         alert("주민등록번호를 입력해주세요");
//         $("#id_num").focus();
//         return false;
//     }

//     if (check_jumin() == false) {
//         return false;
//     }

//     //관심분야
//     for (let i = 0; i < $('[name="hobby[]"]').length; i++) {
//         if ($('input:checkbox[name="hobby[]"]').eq(i).is(":checked") == true) {
//             hobbyCheck = true;
//             break;
//         }
//     }

//     if (!hobbyCheck) {
//         alert("하나이상 관심분야를 체크해 주세요");
//         return false;
//     }

//     //자기소개란 유효성 검사
//     //공백이 있다면 안됨.
//     if (getIntro == "") {
//         alert("자기소개를 입력해주세요");
//         $("#intro").val("");
//         $("#intro").focus();
//         return false;
//     }

//     return true;
// }