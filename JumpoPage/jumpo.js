// 로그인 로직은 건들이시면 안됩니다.
document.querySelector('.login-button').addEventListener('click', function () {
  window.location.href = 'http://localhost:5501/LoginPage/login.html';
});

function logout() {
  localStorage.removeItem('user');
  window.location.reload();
}

// 로그인 되면 로그인 정보 로컬스토리지에서 확인하고, 로그아웃 버튼으로 변경하는 로직
window.onload = function main() {
  const loginButton = document.querySelector('.login-button');

  // Check if user is logged in
  const userData = localStorage.getItem('user');
  if (userData) {
    // User is logged in
    const user = JSON.parse(userData);
    loginButton.textContent = '로그아웃';
    loginButton.addEventListener('click', logout);
    // 유저 객체 사용
    console.log(user.id);
    console.log(user.email);
    console.log(user.nickname);
    // 로그아웃 되면 버튼 내용 변경
  } else {
    // User is logged out
    loginButton.textContent = '로그인 / 회원가입';
    loginButton.addEventListener('click', function () {
      window.location.href = 'http://localhost:5501/LoginPage/login.html';
    });
  }
};

// 아래부터 작성해주세요
const mockDataReview = [
  {
    code: 200,
    httpStatus: 'OK',
    message: '요청에 성공하였습니다.',
    data: [
      {
        id: 2,
        stars: 5,
        content: '최고에요요',
        reviewer: 'ceo',
        storeName: '윤가네',
        createdAt: '2023-07-10 03:41:57',
        updatedAt: '2023-07-10 03:41:57',
      },
      {
        id: 4,
        stars: 5,
        content: '미쳤다 미쳤어',
        reviewer: 'admin',
        storeName: '윤가네',
        createdAt: '2023-07-10 03:46:15',
        updatedAt: '2023-07-10 03:46:15',
      },
      {
        id: 3,
        stars: 4,
        content: '맛있어요',
        reviewer: 'ceo',
        storeName: '윤가네',
        createdAt: '2023-07-10 03:42:15',
        updatedAt: '2023-07-10 03:42:15',
      },
      {
        id: 5,
        stars: 4,
        content: '미쳤다',
        reviewer: 'admin',
        storeName: '윤가네',
        createdAt: '2023-07-10 03:48:15',
        updatedAt: '2023-07-10 03:48:15',
      },
      {
        id: 1,
        stars: 3,
        content: '보통이에요요',
        reviewer: 'ceo',
        storeName: '윤가네',
        createdAt: '2023-07-10 03:39:07',
        updatedAt: '2023-07-10 03:39:07',
      },
    ],
  },
];

const mockDataStore = [
  {
    code: 200,
    httpStatus: 'OK',
    message: '요청에 성공하였습니다.',
    data: [
      {
        storeId: 1,
        storeName: '망원 닭강정',
        storeDesc: '수정분식입니다.',
        startTime: 'storeTime',
        endTime: 'endtime',
        roadAddress: 'roadAddress입니다.',
        detailAddress: '상세주소',
        storeTel: 'storeTel',
        menuList: [],
        storeImageList: [
          {
            id: 2,
            storeFilename: 'bccf59bd-89cf-4ec1-a9a4-108561c98218.PNG',
            storeImageUrl:
              'D:\\finallikelion_team4\\Traditional-Market/files/bccf59bd-89cf-4ec1-a9a4-108561c98218.PNG',
          },
        ],
        averageStars: 4,
        countReviews: 123,
        userId: 1,
        categoryName: '분식',
      },
      {
        storeId: 2,
        storeName: '수정된반찬가게',
        storeDesc: '수정반찬입니다.',
        startTime: 'storeTime',
        endTime: 'endtime',
        roadAddress: 'roadAddress입니다.',
        detailAddress: '상세주소',
        storeTel: 'storeTel',
        menuList: [],
        storeImageList: [
          {
            id: 2,
            storeFilename: 'bccf59bd-89cf-4ec1-a9a4-108561c98218.PNG',
            storeImageUrl:
              'D:\\finallikelion_team4\\Traditional-Market/files/bccf59bd-89cf-4ec1-a9a4-108561c98218.PNG',
          },
        ],
        averageStars: 4,
        countReviews: 123,
        userId: 1,
        categoryName: '건어물/젓갈',
      },
      {
        storeId: 3,
        storeName: '수정된마트',
        storeDesc: '수정마트입니다.',
        startTime: 'storeTime',
        endTime: 'endtime',
        roadAddress: 'roadAddress입니다.',
        detailAddress: '상세주소',
        storeTel: 'storeTel',
        menuList: [
          {
            id: 2,
            menuName: 'cake',
            menuPrice: 1000,
            menuDesc: 'test',
            imageName: 'b1ed377f-ad1d-4ad8-8795-4b988b96f906.png',
            imageUrl:
              'D:\\likelionhackathon\\Traditional-Market\\src\\main\\resources\\images\\',
          },
          {
            id: 3,
            menuName: 'latte',
            menuPrice: 2000,
            menuDesc: 'test',
            imageName: '2be1c732-d3bc-4792-b598-dfd9e7a65954.png',
            imageUrl:
              'D:\\likelionhackathon\\Traditional-Market\\src\\main\\resources\\images\\',
          },
        ],
        storeImageList: [
          {
            id: 2,
            storeFilename: 'bccf59bd-89cf-4ec1-a9a4-108561c98218.PNG',
            storeImageUrl:
              'D:\\finallikelion_team4\\Traditional-Market/files/bccf59bd-89cf-4ec1-a9a4-108561c98218.PNG',
          },
        ],
        averageStars: 4,
        countReviews: 123,
        userId: 1,
        categoryName: '마트',
      },
      {
        storeId: 4,
        storeName: '수정된분식집',
        storeDesc: '수정과일입니다.',
        startTime: 'storeTime',
        endTime: 'endtime',
        roadAddress: 'roadAddress입니다.',
        detailAddress: '상세주소',
        storeTel: 'storeTel',
        menuList: [],
        storeImageList: [
          {
            id: 2,
            storeFilename: 'bccf59bd-89cf-4ec1-a9a4-108561c98218.PNG',
            storeImageUrl:
              'D:\\finallikelion_team4\\Traditional-Market/files/bccf59bd-89cf-4ec1-a9a4-108561c98218.PNG',
          },
        ],
        averageStars: 4,
        countReviews: 123,
        userId: 1,
        categoryName: '과일',
      },
    ],
  },
];

// -------------------------------------------------------------------------
// 페이지 시작 시 정보 불러오기
// 1. 가게 이름, 가게 번호, 가게 별점, 가게 설명
const urlParams = new URLSearchParams(window.location.search);
const selectedStoreID = urlParams.get('id');

$(document).ready(function () {
  showStoreData(loadStoresData());
  showStoreImage(loadStoresData());
  showMenu(loadStoresData());
  renderReviewTable(loadReviewData());
});

// function loadStoresData() {
//   const url = '/api/stores?storeid=1'; // 가게 데이터를 불러올 엔드포인트 URL
//   const selectedStoreData = mockDataStore[0].data[selectedStoreID - 1]; // Mock 데이터에서 실제 데이터를 가져옴
//   return selectedStoreData;
// }

//---------------------------통신용-------------------------------
function loadStoresData() {
  let selectedStoreData = [];
  let url = '/api/stores/by-category/1'
  $.ajax({
    type: "GET",
    url: url,
    contentType : 'application/json', 
    async: false,
    success: function (response) {
      selectedStoreData = response.data;
    }

  })
  return selectedStoreData;
}
//---------------------------------------------------------------

function loadReviewData() {
  const url = '/api/stores/{storeId}/reviews?sort=stars';
  const selectedReviewData = mockDataReview[0].data;
  return selectedReviewData;
}

function showStoreData(data) {
  var storeName = document.getElementById('storeName');
  var storeDesc = document.getElementById('storeDesc');
  var storeTime = document.getElementById('storeTime');
  var storeTel = document.getElementById('storeTel');

  storeName.textContent = data.storeName;
  storeDesc.textContent = data.storeDesc;
  storeTime.textContent = '영업시간: ' + data.storeTime;
  storeTel.textContent = data.storeTel;
}

function showStoreImage(data) {
  const imageList = document.getElementById('storeImageList');

  data.storeImageList.forEach((img) => {
    const imageItem = document.createElement('li');

    const image = document.createElement('img');
    image.src = img.storeFilename;
    image.className = 'store-img';
    imageItem.appendChild(image);
    imageList.appendChild(imageItem);
  });
}

//---------------------------통신용-------------------------------
// function loadReivewData() {
//   let selectedReviewData = [];
//   let url = '/api/stores/'+selectedStoreID+'/reviews?sort=stars' 
//   $.ajax({
//     type: "GET",
//     url: url,
//     contentType : 'application/json', 
//     async: false,
//     success: function (response) {
//       selectedReviewData = response.data;
//     }
//   })
//   return selectedReviewData;
// }
//---------------------------------------------------------------

// 2. 리뷰 정보 불러오기
function renderReviewTable(data) {
  let tableBody = $('#review-table tbody');
  tableBody.empty();

  data.forEach(function (review) {
    let row = $('<tr>');
    let starRating = review.stars; // 리뷰의 별점

    // 별을 그리는 기능 추가
    let stars = $('<span>').addClass('stars');
    for (let i = 0; i < starRating; i++) {
      stars.append($('<i>').addClass('fas fa-star').css('color', '#ffd700'));
    }

    row.append($(stars));
    row.append($('<td>').text(review.content));
    row.append($('<td>').text('(' + review.reviewer + ')'));
    tableBody.append(row);
  });
}

// 리뷰 작성
const ratingStars = [...document.getElementsByClassName('rating_star')];
const ratingResult = document.querySelector('.rating_result');
executeRating(ratingStars, ratingResult);

const reviewData = [];

function executeRating(stars) {
  const starClassActive = 'rating_star fas fa-star';
  const starClassInactive = 'rating_star far fa-star';
  const starsLength = stars.length;
  let selectedStars = 0;

  stars.forEach((star, index) => {
    star.onclick = () => {
      for (let i = 0; i < starsLength; i++) {
        if (i <= index) {
          stars[i].className = starClassActive;
        } else {
          stars[i].className = starClassInactive;
        }
      }

      selectedStars = index + 1;
      printRatingResult(selectedStars);
    };
  });

  function printRatingResult(num = 0) {
    ratingResult.textContent = `${num}`;
    console.log(num);
  }
}

const reviewForm = document.querySelector('.write-review');
reviewForm.addEventListener('submit', reviewPost);

// function reviewPost(e) {
//   e.preventDefault(); // 기본 동작을 막음

//   const content = document.getElementById('content').value;
//   const stars = parseInt(ratingResult.textContent);

//   const newReview = {
//     content: content,
//     stars: stars,
//   };

//   reviewData.push(newReview);
//   console.log(reviewData);
// }

//--------------------------------통신용------------------------------------
function reviewPost(e) {
   e.preventDefault();
   const content = document.getElementById('content').value;
   const stars = parseInt(ratingResult.textContent);

   const newReview = {
    content: content,
    stars: stars,
  };

  const url = '/api/stores/'+ selectedStoreID + '/review';
  $.ajax({
    type: 'POST',
    url: url,
    contentType: 'application/json',
    data: JSON.stringify({
      'content': newReview.content,
      'stars': newReview.stars
    }),
    success: function(data){
      alert('Success');
    },
    error: function(request, status, error){
      alert('Error');
    }
  })
}
//-------------------------------------------------------------------------

// 3. 메뉴 사진, 메뉴 이름, 메뉴 설명
function showMenu(data) {
  const menuListElement = document.getElementById('menuList');

  data.menuList.forEach((menu) => {
    const listItem = document.createElement('li');
    listItem.className = 'menu_details';

    const image = document.createElement('img');
    image.className = 'menu_image';
    image.src = menu.imageUrl;
    image.alt = menu.menuName;
    listItem.appendChild(image);

    const menuText = document.createElement('div');
    menuText.className = 'menu_text';

    const name = document.createElement('h2');
    name.className = 'menu_name';
    name.textContent = menu.menuName;
    menuText.appendChild(name);

    const price = document.createElement('p');
    price.className = 'menu_price';
    price.textContent = menu.menuPrice + '원';
    menuText.appendChild(price);

    const description = document.createElement('p');
    description.className = 'menu_desc';
    description.textContent = menu.menuDesc;
    menuText.appendChild(description);

    listItem.appendChild(menuText);
    menuListElement.appendChild(listItem);
  });
}

var mapContainer = document.getElementById('map');
var mapOption = {
  center: new kakao.maps.LatLng(33.450701, 126.570667),
  level: 1,
};

var map = new kakao.maps.Map(mapContainer, mapOption);

function searchAddressToCoordinate(address) {
  var geocoder = new kakao.maps.services.Geocoder();

  geocoder.addressSearch(address, function (result, status) {
    if (status === kakao.maps.services.Status.OK) {
      var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
      var marker = new kakao.maps.Marker({
        map: map,
        position: coords,
      });
      map.setCenter(coords);
    }
  });
}

var address = '서울특별시 마포구 망원동 망원로8길 27';
searchAddressToCoordinate(address);
