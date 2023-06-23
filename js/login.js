// 제이쿼리로 작업중임.. 자스랑 섞어 쓰면 에러남..!
$(function () {

    loginLabel();
    function loginLabel() {
        let loginAreaLabel = $('.loginArea label');
        let loginAreaInput = $('.loginArea input');


        // 검색어에 값이 있을때
        loginAreaInput.on('focus', function () {
            $(this).siblings('label').removeClass('off').addClass('on');
            $(this).addClass('focus');
        });

        loginAreaInput.on('blur', function () {
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

