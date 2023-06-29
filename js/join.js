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


    // Section id 아이디
    var error = $('.id_area .error_next_box');
    var condition1 = $('.idCondition .condition1');
    var condition2 = $('.idCondition .condition2');
    var id = $('#id');
    let checkIcon1 = $('.idCondition .condition1 span')
    let checkIcon2 = $('.idCondition .condition2 span')

    id.on("input", function () {
        checkId();
        checkLength();
        checkCharacter();
    });

    function checkId() {
        if (id.val() === "") {
            error.eq(0).html("필수 정보입니다.");
            error.eq(0).css("display", "block");
        } else {
            error.eq(0).css("display", "none");
        }
    };

    function checkLength() {
        var lengthPattern = /^.{5,20}$/;
        if (!lengthPattern.test(id.val())) {
            condition1.eq(0).css("color", "#d30005");
            checkIcon1.addClass('red').removeClass('green');
        } else {
            condition1.eq(0).css("color", "#08A600");
            checkIcon1.addClass('green').removeClass('red');
        }
    };

    function checkCharacter() {
        var characterPattern = /^[a-zA-Z0-9_-]*$/;
        if (!characterPattern.test(id.val())) {
            condition2.eq(0).css("color", "#d30005");
            checkIcon2.addClass('red').removeClass('green');
        } else {
            condition2.eq(0).css("color", "#08A600");
            checkIcon2.addClass('green').removeClass('red');
        }
    };




    // pw
    // 변수 선언
    // var pw1 = document.querySelector('#pswd1');
    // var pwMsg = document.querySelector('.lbl .step_txt');
    // var pwImg1 = document.querySelector('.ps_box.int_pass:after');


    // pw1.addEventListener("change", checkPw);

    // function checkPw() {
    //     var pwPattern = /^[a-zA-Z0-9~!@#$%^&*()_+|<>?:{}]{8,16}$/;
    //     if (pw1.value === "") {
    //         error[1].innerHTML = "필수 정보입니다.";
    //         pwMsg.style.display = "block";
    //         pwMsgArea.style.paddingRight = "40px";
    //         pwImg1.src = "m_icon_pass.png";
    //         error[1].style.display = "block";
    //     } else if (!pwPattern.test(pw1.value)) {
    //         error[1].innerHTML = "8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.";
    //         pwMsg.innerHTML = "사용불가";
    //         pwMsgArea.style.paddingRight = "93px";
    //         error[1].style.display = "block";
    //         pwMsg.style.color = "red";
    //         pwMsg.style.display = "block";
    //         pwImg1.src = "m_icon_not_use.png";
    //     } else {
    //         error[1].style.display = "none";
    //         pwMsg.innerHTML = "안전";
    //         pwMsgArea.style.paddingRight = "93px";
    //         pwMsg.style.color = "#03c75a";
    //         pwMsg.style.display = "block";
    //         pwImg1.src = "m_icon_safe.png";
    //     }
    // }





    // 아이디 id 부분
    // function checkId(event) {
    //     if (idFlag) return true;

    //     var id = $("#id").val();
    //     var oMsg = $("#idMsg");
    //     var oInput = $("#id");

    //     if (id === "") {
    //         showErrorMsg(oMsg, "필수 정보입니다.");
    //         setFocusToInputObject(oInput);
    //         return false;
    //     }

    //     var isID = /^[a-z0-9][a-z0-9_\-]{4,19}$/;
    //     if (!isID.test(id)) {
    //         showErrorMsg(oMsg, "5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.");
    //         setFocusToInputObject(oInput);
    //         return false;
    //     }

    //     idFlag = false;
    //     var key = $("#token_sjoin").val();

    //     $.ajax({
    //         type: "GET",
    //         url: "/user2/joinAjax?m=checkId&id=" + id + "&key=" + key,
    //         success: function (data) {
    //             var result = data.substr(4);

    //             if (result == "Y") {
    //                 if (event == "first") {
    //                     showSuccessMsg(oMsg, "멋진 아이디네요!");
    //                 } else {
    //                     hideMsg(oMsg);
    //                 }
    //                 idFlag = true;
    //             } else {
    //                 showErrorMsg(oMsg, "이미 사용중이거나 탈퇴한 아이디입니다.");
    //                 setFocusToInputObject(oInput);
    //             }
    //         }
    //     });
    //     return true;
    // }

    // 뭐 했을떄 실패는 에러, 성공은 그린 붙여서 나타내란건 알겠다요
    // function showErrorMsg(obj, msg) {
    //     obj.attr("class", "error_next_box");
    //     obj.html(msg);
    //     obj.show();
    // }
    // function showSuccessMsg(obj, msg) {
    //     obj.attr("class", "error_next_box green");
    //     obj.html(msg);
    //     obj.show();
    // }



    //주민번호 확인 함수
    // function check_jumin() {
    //     var jumins3 = $("#pnum").val() + $("#nnum").val();
    //     //주민등록번호 생년월일 전달

    //     var fmt = RegExp(/^\d{6}[1234]\d{6}$/)  //포멧 설정
    //     var buf = new Array(13);

    //     //주민번호 유효성 검사
    //     if (!fmt.test(jumins3)) {
    //         alert("주민등록번호 형식에 맞게 입력해주세요");
    //         $("#pnum").focus();
    //         return false;
    //     }

    //     //주민번호 존재 검사
    //     for (var i = 0; i < buf.length; i++) {
    //         buf[i] = parseInt(jumins3.charAt(i));
    //     }

    //     var multipliers = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];// 밑에 더해주는 12자리 숫자들 
    //     var sum = 0;

    //     for (var i = 0; i < 12; i++) {
    //         sum += (buf[i] *= multipliers[i]);// 배열끼리12번 돌면서 
    //     }

    //     if ((11 - (sum % 11)) % 10 != buf[12]) {
    //         alert("잘못된 주민등록번호 입니다.");
    //         $("#pnum").focus();
    //         return false;
    //     }

    //     var birthYear = (jumins3.charAt(6) <= "2") ? "19" : "20";
    //     birthYear += $("#pnum").val().substr(0, 2);
    //     var birthMonth = $("#pnum").val().substr(2, 2);
    //     var birthDate = $("#pnum").val().substr(4, 2);
    //     var birth = new Date(birthYear, birthMonth, birthDate);


    //     $("#year").val(birthYear);
    //     $("#month").val(birthMonth);
    //     $("#day").val(birthDate);

    // }
});



// 일단 긁어온거라서 아직 뭔지 확인 안했음
// function check() {
//     var getIntro = $("#intro").val().replace(/\s|/gi, '');
//     var hobbyCheck = false;
//     var getMail = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);
//     var getCheck = RegExp(/^[a-zA-Z0-9]{4,12}$/);
//     var getName = RegExp(/^[가-힣]+$/);
//     var fmt = RegExp(/^\d{6}[1234]\d{6}$/); //형식 설정
//     var buf = new Array(13); //주민등록번호 배열


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
//     for (var i = 0; i < $('[name="hobby[]"]').length; i++) {
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