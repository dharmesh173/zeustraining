const announcementParent = document.querySelector(".subdiv");

fetch("./announcement.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    repeatNoti(data.notification);
    repeatAnn(data.announcement);
  });

const repeatAnn = (data) => {
  data.map((ele) => {
    const annCard = document.createElement("div");
    annCard.className = "ann-card";

    const upper = document.createElement("div");
    upper.className = "upper";

    const titleLeft = document.createElement("div");
    titleLeft.className = "title-left";

    const prefix1 = document.createElement("span");
    prefix1.style = "color: #6e6e6e";
    prefix1.innerHTML = "PA:";
    const nameTag = document.createElement("span");
    nameTag.style = "color: #222222";
    nameTag.innerHTML = ele.up;

    titleLeft.appendChild(prefix1);
    titleLeft.appendChild(nameTag);

    const annImg = document.createElement("img");
    annImg.src = ele.iconpath;
    annImg.alt = "dvnf";
    upper.appendChild(titleLeft);
    upper.appendChild(annImg);

    const middle = document.createElement("div");
    middle.classList.add("middle");

    const middleText = document.createElement("span");
    middleText.className = "text-middle";
    middleText.innerHTML = ele.title;
    middle.appendChild(middleText);

    const lower = document.createElement("div");
    lower.className = "lower";

    const leftContent = document.createElement("div");
    leftContent.className = "left-content";
    const paperClip = document.createElement("img");
    paperClip.src = "./icons/icons/paperclip.png";
    paperClip.className = "paperclip";
    const textt = document.createElement("span");
    textt.innerHTML = ele.lef;

    ele.lef === null ? "" : leftContent.appendChild(paperClip);

    leftContent.appendChild(textt);

    const dateTime = document.createElement("span");
    dateTime.className = "date-time";
    dateTime.innerHTML = `${ele.date} at ${ele.time}`;
    lower.appendChild(leftContent);
    lower.appendChild(dateTime);

    const line3 = document.createElement("div");
    line3.className = "line2";

    annCard.appendChild(upper);
    annCard.appendChild(middle);
    annCard.appendChild(lower);
    annCard.appendChild(line3);

    annCard.style.backgroundColor = ele.bg;

    announcementParent.appendChild(annCard);
  });
};

const annMenu = document.querySelector(".announcement-div");
const annBtn = document.querySelector("#announcementId");
let tgl2 = true;

annBtn.addEventListener("click", show2);

function show2() {
    nots.style = "display:none";
  if (tgl2 === true) {
    annMenu.style = "display: flex";
  } else {
    annMenu.style = "display: none";
  }

  tgl2 = !tgl2;
}

const repeatNoti = (data) => {
  let antt = document.querySelector(".notisubdiv");

  for (let ele of data) {
    let f = document.createElement("div");
    f.setAttribute("class", "f");

    f.style.backgroundColor = ele.bg;

    let hh = document.createElement("div");
    hh.setAttribute("class", "hh");

    let head = document.createElement("span");
    head.setAttribute("class", "head");

    head.innerText = ele.title;

    hh.appendChild(head);

    let img = document.createElement("img");
    img.setAttribute("src", ele.iconpath);

    hh.appendChild(img);

    f.appendChild(hh);

    if (ele.course != "") {
      let mid = document.createElement("span");
      mid.setAttribute("class", "mid");

      mid.innerText = "course: " + ele.course;
      f.appendChild(mid);
    }
    if (ele.class != "") {
      let mid = document.createElement("span");
      mid.setAttribute("class", "mid");

      mid.innerText = "class: " + ele.class;
      f.appendChild(mid);
    }
    const brr = document.createElement("br");
    f.appendChild(brr);

    let last = document.createElement("span");
    last.setAttribute("class", "last");
    const linre3 = document.createElement("div");
    linre3.className = "line2";

    last.innerText = ele.date;
    f.appendChild(last);
    f.appendChild(linre3);

    antt.appendChild(f);
  }
};

const nots = document.querySelector(".notifications");
const notiBtn = document.querySelector("#notificationId");
let tgl3 = true;
console.log(notiBtn + nots);
notiBtn.addEventListener("click", show3);

function show3() {
    annMenu.style = "display:none";
  if (tgl3 === true) {
    console.log("sss");
    nots.style = "display: flex";
  } else {
    nots.style = "display: none";
  }
  console.log("sss122");

  tgl3 = !tgl3;
}

if (window.innerWidth > 768) {
    notiBtn.addEventListener("mouseover", show3);
    notiBtn.addEventListener("mouseout", show3);
    annBtn.addEventListener("mouseover", show2);
    annBtn.addEventListener("mouseout", show2);
}



