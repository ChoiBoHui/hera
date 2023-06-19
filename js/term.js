// 제이쿼리로 작업중임.. 자스랑 섞어 쓰면 에러남..!
$(function () {

    //전체동의 클릭 시,
    $("#chkAll").change(function () {
        if ($(this).is(":checked")) { //대상이 체크 되어 있을 때
            //모든 체크박스 체크
            $("input[name=del-chk]").prop("checked", true);
        } else { //전체 동의가 체크 해제 되어 있을 때
            //모든 체크박스 체크해제
            $("input[name=del-chk]").prop("checked", false);
        }
    });


    // 각각의 .del-chk가 모두 선택됐을 때, 전체동의도 체크, 하나라도 체크가 풀리면 전체동의도 체크가 풀리게
    $(document).on('click', 'input[name=del-chk]', function () {
        if ($('input[name=del-chk]:checked').length == $('input[name=del-chk]').length) {
            $('#chkAll').prop('checked', true);
        }
        else {
            $('#chkAll').prop('checked', false);
        }
    });

    const req = $(".required");
    const cnt = $(req).length;

    $(".btn_primary").on("click", function () {
        if (cnt != req.filter(":checked").length) {
            alert("필수 항목을 체크 해주세요.");
            return false;
        }
    });


    // footer 언어 설정 Start
    function footerLanguage() {
        $('.footer .footer_utils .language').on('click', function () {
            $('.footer .footer_utils .languageLink').slideToggle().toggleClass('open');
            $(this).toggleClass('open');
        })
    };
    // footer 언어 설정 End
    footerLanguage();

});

