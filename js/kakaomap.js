// document.addEventListener('DOMContentLoaded', function () {

//     let mapContainer = document.getElementById('map'); // 지도를 표시할 div 
//     let mapOption = {
//         center: new kakao.maps.LatLng(37.52611, 126.92862), // 지도의 중심좌표
//         level: 4 // 지도의 확대 레벨
//     };

//     let map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

//     let anchors = document.getElementsByClassName('store_info');

//     for (let i = 0; i < anchors.length; i++) {
//         anchors[i].addEventListener('click', function (event) {
//             event.preventDefault(); // 기본 링크 동작 방지

//             let lat = parseFloat(this.getAttribute('data-lat'));
//             let lng = parseFloat(this.getAttribute('data-lng'));

//             // 클릭한 링크의 data-lat 및 data-lng 값을 가져와서 지도의 중심 좌표로 설정
//             let newCenter = new kakao.maps.LatLng(lat, lng);
//             map.setCenter(newCenter);

//             // 마커의 위치도 변경
//             marker.setPosition(newCenter);
//         });
//     };


//     let imageSrc = 'https://choibohui.github.io/hera/img/icon/map_marker.svg'; // 마커이미지의 주소입니다    
//     let imageSize = new kakao.maps.Size(40, 50); // 마커이미지의 크기입니다
//     let imageOption = { offset: new kakao.maps.Point(22, 50) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

//     // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
//     let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
//     let markerPosition = new kakao.maps.LatLng(37.52611, 126.92862); // 초기 마커의 표시될 위치입니다

//     // 마커를 생성합니다
//     let marker = new kakao.maps.Marker({
//         position: markerPosition,
//         image: markerImage // 마커이미지 설정 
//     });

//     // 마커가 지도 위에 표시되도록 설정합니다
//     marker.setMap(map);


//     // 매장 리스트 선택 활성화
//     document.querySelectorAll('.storeList li').forEach(function (item) {
//         item.addEventListener('click', function () {
//             this.classList.add('select');

//             let siblings = Array.from(this.parentNode.children);
//             siblings.forEach(function (sibling) {
//                 if (sibling !== this) {
//                     sibling.classList.remove('select');
//                 }
//             }, this);
//         });
//     });




// });


$(function () {
    let mapContainer = $('#map'); // 지도를 표시할 div 
    let mapOption = {
        center: new kakao.maps.LatLng(37.52611, 126.92862), // 지도의 초기 중심좌표
        level: 4 // 지도의 확대 레벨
    };

    let map = new kakao.maps.Map(mapContainer.get(0), mapOption); // 지도를 생성합니다

    function storeMapData() {
        $('.storeInfo').on('click', function () {
            const infoTextData = $('.infoText');
            let lat = parseFloat(infoTextData.data('lat'));
            let lng = parseFloat(infoTextData.data('lng'));

            // 클릭한 링크의 data-lat 및 data-lng 값을 가져와서 지도의 중심 좌표로 설정
            let newCenter = new kakao.maps.LatLng(lat, lng);
            map.setCenter(newCenter);

            // 마커의 위치도 변경
            marker.setPosition(newCenter);
        });

        let imageSrc = 'https://choibohui.github.io/hera/img/icon/map_marker.svg'; // 마커이미지의 주소입니다    
        let imageSize = new kakao.maps.Size(40, 50); // 마커이미지의 크기입니다
        let imageOption = { offset: new kakao.maps.Point(22, 50) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
        let markerPosition = new kakao.maps.LatLng(37.52611, 126.92862); // 초기 마커의 표시될 위치입니다

        // 마커를 생성합니다
        let marker = new kakao.maps.Marker({
            position: markerPosition,
            image: markerImage // 마커이미지 설정 
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        // 매장 리스트 선택 활성화
        $('.storeList li').click(function () {
            $(this).addClass('select');
            $(this).siblings().removeClass('select');
        });

    };
    storeMapData();

    function storeLink() {
        $('.infoText').on('click', function (event) {
            let windowWidth = $(window).width();

            if (windowWidth >= 1200) {
                event.preventDefault(); // 기본 링크 동작 방지
            } else {
                link.off('click');
            };
        });
    };
    storeLink(); //리사이즈 필요함

    $(window).resize(function () {
        storeLink();
    });


});

function storeSubmit() {
    alert("검색 기능은 구현되지 않았습니다.");
    // submit 버튼 작동 확인용
    // 어차피 창 넘어갈꺼니까 input 값 초기화 안함

    // 이후 액션은 개발자 부분
    return false;
};