const gallery = document.querySelector(".gallery");

console.log("cardMaker loaded");

let requestURL = "../data/database.json"
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function() {
  const clubs = request.response;
  showClubs(clubs);
};

function showClubs(jsonObj) {
  const clubs = jsonObj["clubs"];

  for (let i = 0; i < clubs.length; i++) {

    const clubName = clubs[i].동아리명;
    const clubType = clubs[i].대분류;
    const cclubType = clubs[i].중분류1;
    const ccclubType = clubs[i].소분류;
    const clubAbout = clubs[i].소개글;
    const clubLine = clubs[i].핵심문구;
    const clubActivity = clubs[i].활동정보;
    const clubActDay = clubs[i].모임요일;
    const clubRecruitDuration = clubs[i].모집시기;
    const clubRecruitNum = clubs[i].모집인원;
    const clubServeTime = clubs[i].활동기간;
    const clubRecruiting = clubs[i].모집전형;
    const clubLocation = clubs[i].위치;
    const clubContact = clubs[i].대페;

    let sortType = "";

    switch (cclubType) {
      case "연행예술":
        sortType = "yy";
        break;
      case "평면예술":
        sortType = "py";
        break;
      case "봉사":
        sortType = "bs";
        break;
      case "취미교양":
        sortType = "cg";
        break;
      case "스포츠":
        sortType = "sp";
        break;
      case "종교분과":
        sortType = "jg";
        break;
      case "학술분과":
        sortType = "hb";
        break;
      case "인문사회":
        sortType = "is";
        break;
      default:
        console.log(`error with ${clubName}`)
    }

    let card = document.createElement('div');
    card.innerHTML = `
    <div
    class="col l3 m4 s6 gallery-item gallery-expand gallery-filter ${sortType}"
  >
    <div class="gallery-curve-wrapper">
      <a class="gallery-cover gray">
        <img
          class="responsive-img"
          src="/img/${clubName}.jpeg"
          onerror="javascript:src='/img/몰라잉.jpeg'"
        />
      </a>
      <div class="gallery-header">
        <span>${clubName}</span>
      </div>
      <div class="gallery-body">
        <div class="title-wrapper">
          <h3>${clubName}</h3>
          <span class="price">${clubType} > ${cclubType} > ${ccclubType}</span>
        </div>
        <div class="card-buttons">
          <a class="waves-effect waves-light btn" onclick="smoothScroll(document.getElementById('about'))">About</a>
          <a class="waves-effect waves-light btn" onclick="smoothScroll(document.getElementById('activity'))"
            >Activity</a
          >
          <a class="waves-effect waves-light btn" onclick="smoothScroll(document.getElementById('recruiting'))">Recruiting</a>
          <a class="waves-effect waves-light btn" onclick="smoothScroll(document.getElementById('contact'))">Contact</a>
        </div>
        <p class="description line">
          "${clubLine}"
        </p>
        <p class="description" id="about">
          About
        </p>
        <p>
          ${clubAbout}
        </p>
        <hr>

        <p class="description" id="activity">
          Activity
        </p>
        <p>
          ${clubActivity}
        </p>

        <hr>

        <p class="description" id="recruiting">
          Recruiting
          </p>
          <div class="row">
            <div class="col s6">
              <div class="center-align card-panel">
                <i class="material-icons card-icon">school</i>
                <h4 class="center-align">모집시기</h4>
                <h5 class="center-align">${clubRecruitDuration}<h5>
              </div>
            </div>

            <div class="col s6">
              <div class="center-align card-panel">
                <i class="material-icons card-icon">school</i>
                <h4 class="center-align">모집인원</h4>
                <h5 class="center-align">${clubRecruitNum} 명<h5>
              </div>
            </div>

            <div class="col s6">
              <div class="center-align card-panel">
                <i class="material-icons card-icon">school</i>
                <h4 class="center-align">의무 활동기간</h4>
                <h5 class="center-align">${clubServeTime}<h5>
              </div>
            </div>

            <div class="col s6">
              <div class="center-align card-panel">
                <i class="material-icons card-icon">school</i>
                <h4 class="center-align">모집방식</h4>
                <h5 class="center-align">${clubRecruiting}<h5>
              </div>
            </div>

            <div class="col s12">
              <div class="center-align card-panel">
                <i class="material-icons card-icon">school</i>
                <h4 class="center-align">모임 요일</h4>
                <h5 class="center-align">${clubActDay}<h5>
              </div>
            </div>
          </div>
          <hr>
          
        <p class="description" id="contact">
          Contact
        </p>
        <a class="waves-effect waves-light btn" target="_blank" href="${clubContact}">대표 페이지</a>
      </div>
    </div>
  </div>
    `;

    gallery.appendChild(card);
  }
}
