// 제이쿼리로 작업중임.. 자스랑 섞어 쓰면 에러남..!
$(function () {

    loginLabel();
    function loginLabel() {
        let loginAreaLabel = $('.loginArea label');
        let loginAreaInput = $('.loginArea .text_field');


        // 검색어에 값이 있을때
        loginAreaInput.on('focus', function () {
            $(this).siblings('label').removeClass('off').addClass('on');
            $(this).closest(".loginInputBox").addClass('focus');
        });

        loginAreaInput.on('blur', function () {
            $(this).closest(".loginInputBox").removeClass('focus');

            if ($(this).val().length == 0) {
                $(this).siblings('label').removeClass('on').removeClass('off');
                $(this).removeClass('focus');
                // console.log(this.value);
            } else {
                $(this).siblings('label').removeClass('on').addClass('off');
                $(this).removeClass('focus');
                // console.log(this.value);
            };
        });


    };

});


let count = 0;
function loginCheck() {
    let joinPlease = $('.joinPlease');
    let findPW = $('.findPW');
    let fakeBox = $('.fakeBox');

    //변수 증가
    count = count + 1;
    console.log(count);
    if (count == 1) {
        // findPW.addClass("O-O")
        joinPlease.addClass("clickPlease")
    } else if (count == 2) {
        joinPlease.addClass("hey")

        let delay = 1000
        joinPlease.addClass("vibration");
        setTimeout(function () {
            joinPlease.removeClass("vibration");
        }, delay)

    } else if (count == 3) {
        fakeBox.addClass("O-O")
        joinPlease.addClass("fxxkingLogin")
    } else if (count == 4) {
        joinPlease.addClass("fxxkYou")
    }

    alert("앗! 아직 회원이 아니시군요? 헤라의 회원이 되어주시겠어요?");
    // 로그인 버튼 한번 누를때마다 회원가입 버튼 굵고 커지게 하고n싶다. 귀엽고 재밌게!!

    // 이후 액션은 개발자 부분
    return false;
};