document.addEventListener('DOMContentLoaded', function () {

    var mapContainer = document.getElementById('map'); // 지도를 표시할 div 
    var mapOption = {
        center: new kakao.maps.LatLng(37.52611, 126.92862), // 지도의 중심좌표
        level: 4 // 지도의 확대 레벨
    };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    var anchors = document.getElementsByClassName('store_info');

    for (var i = 0; i < anchors.length; i++) {
        anchors[i].addEventListener('click', function (event) {
            event.preventDefault(); // 기본 링크 동작 방지

            var lat = parseFloat(this.getAttribute('data-lat'));
            var lng = parseFloat(this.getAttribute('data-lng'));

            // 클릭한 링크의 data-lat 및 data-lng 값을 가져와서 지도의 중심 좌표로 설정
            var newCenter = new kakao.maps.LatLng(lat, lng);
            map.setCenter(newCenter);

            // 마커의 위치도 변경
            marker.setPosition(newCenter);
        });
    };


    var imageSrc = 'https://choibohui.github.io/hera/img/icon/map_marker.svg'; // 마커이미지의 주소입니다    
    var imageSize = new kakao.maps.Size(40, 50); // 마커이미지의 크기입니다
    var imageOption = { offset: new kakao.maps.Point(22, 50) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
    var markerPosition = new kakao.maps.LatLng(37.52611, 126.92862); // 초기 마커의 표시될 위치입니다

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage // 마커이미지 설정 
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);


    // 매장 리스트 선택 활성화
    document.querySelectorAll('.storeList li').forEach(function (item) {
        item.addEventListener('click', function () {
            this.classList.add('select');

            var siblings = Array.from(this.parentNode.children);
            siblings.forEach(function (sibling) {
                if (sibling !== this) {
                    sibling.classList.remove('select');
                }
            }, this);
        });
    });




});