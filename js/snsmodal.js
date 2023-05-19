$(function () {
    // sns 슬라이더 Start
    $('.modal .snsArea .snsSlider').slick({
        arrows: false,
        autoplay: false,
        // useTransform: false,
        dots: true,
        dotsClass: 'sns-modal-custom-dots',
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        // variableWidth: true,
    });

    // 제품 좋아요 버튼
    $('.modal .productArea .cmlink_btn .addWishlist').on('click', function () {
        $(this).toggleClass('plusWish');
    });
});