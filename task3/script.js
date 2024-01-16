let parentBody = document.querySelector(".cards");

fetch("./data.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => repeatCard(data));

const repeatCard = (data) => {
  data.map((ele) => {
    const cardContainer = document.createElement("div");
    cardContainer.className = "ff";

    if (ele.Expired === true) {
      const expireTag = document.createElement("div");
      expireTag.className = "badge";
      expireTag.innerHTML = "EXPIRED";
      cardContainer.appendChild(expireTag);
    }

    const upperBody = document.createElement("div");
    upperBody.className = "card";

    const courseImg = document.createElement("img");
    courseImg.className = "img";
    courseImg.src = ele.ImageSrc;
    courseImg.alt = "this is course 1 image";

    const contentSection = document.createElement("div");
    contentSection.className = "content";

    const heading1 = document.createElement("p");

    // let titleHeaderImg = document.createElement("img");
    // titleHeaderImg.classList = ele.Favourite ? "favourite" : "";
    // titleHeaderImg.id = ele.Favourite ? "" : "star";
    // titleHeaderImg.src = ele.Favourite
    //   ? "./icons/favourite.svg"
    //   : "./icons/Star.svg";
    // titleHeaderImg.addEventListener("click", () => {
    //   if (ele.Favourite) {
    //     titleHeaderImg.classList.add("favourite");
    //     titleHeaderImg.id = "";
    //     titleHeaderImg.src = "./icons/favourite.svg";
    //   } else {
    //     titleHeaderImg.id = "star";
    //     titleHeaderImg.classList = "";
    //     titleHeaderImg.src = "./icons/Star.svg";
    //   }
    //   ele.Favourite = !ele.Favourite;
    // });
    // titleHeaderImg.alt = "Favorite";
    // cardDetailsTitle.appendChild(titleHeaderImg);

    const innerImg = document.createElement("img");
    innerImg.id = ele.Favourite ? "" : "star";
    innerImg.src = "./icons/icons/favourite.svg";
    innerImg.src = ele.Favourite
      ? "./icons/icons/favourite.svg"
      : "./icons/icons/Star.svg";
    innerImg.addEventListener("click", () => {
      if (ele.Favourite) {
        innerImg.classList.add("favourite");
        innerImg.id = "";
        innerImg.src = "./icons/icons/favourite.svg";
      } else {
        innerImg.id = "star";
        innerImg.classList = "";
        innerImg.src = "./icons/icons/Star.svg";
      }
      ele.Favourite = !ele.Favourite;
    });
    heading1.innerHTML = ele.Title;
    heading1.append(innerImg);
    contentSection.appendChild(heading1);

    const subSubject = document.createElement("ul");
    subSubject.className = "spec";

    const subName = document.createElement("li");
    subName.className = "ff";
    subName.innerHTML = ele.Subject;

    const verticleLine = document.createElement("li");
    verticleLine.innerHTML = "|";

    const gradeC = document.createElement("li");
    gradeC.innerHTML = `Grade ${ele.Grade}`;

    const numberOfStudent = document.createElement("li");
    numberOfStudent.style = "color: #1f7a54";
    numberOfStudent.innerHTML = `+ ${ele.GradePlus}`;

    subSubject.appendChild(subName);
    subSubject.appendChild(verticleLine);
    subSubject.appendChild(gradeC);
    subSubject.appendChild(numberOfStudent);
    contentSection.appendChild(subSubject);

    const detailsOfCourse = document.createElement("ul");
    detailsOfCourse.className = "not";

    const units = document.createElement("li");
    units.innerHTML =
      ele.Units === null ? "" : `<span>${ele.Units}</span> units`;
    const lessons = document.createElement("li");
    lessons.innerHTML =
      ele.Lessons === null ? "" : `<span>${ele.Lessons}</span> lessons`;
    const topics = document.createElement("li");
    topics.innerHTML =
      ele.Topics === null ? "" : `<span>${ele.Topics}</span> topics`;

    detailsOfCourse.append(units);
    detailsOfCourse.append(lessons);
    detailsOfCourse.append(topics);
    contentSection.appendChild(detailsOfCourse);

    const selectClassName = document.createElement("select");
    selectClassName.className = "card-select";
    selectClassName.id = "";
    selectClassName.name = "";
    const option1 = document.createElement("option");
    option1.value = "";

    option1.innerHTML = ele.Classes === null ? "No Classes" : ele.Classes;
    selectClassName.append(option1);
    contentSection.appendChild(selectClassName);

    const analyticsOfCourse = document.createElement("ul");
    analyticsOfCourse.className = "spec";

    const studentsCount = document.createElement("li");
    studentsCount.className = "ff";
    studentsCount.innerHTML =
      ele.Students === null ? "" : `${ele.Students} Students`;

    const timeOfCourse = document.createElement("li");
    timeOfCourse.innerHTML =
      ele.StartDate === null && ele.StartDate === null
        ? ""
        : `${ele.StartDate} ${ele.EndDate}`;

    analyticsOfCourse.appendChild(studentsCount);
    analyticsOfCourse.appendChild(timeOfCourse);
    contentSection.appendChild(analyticsOfCourse);

    const lineDiv = document.createElement("div");
    lineDiv.className = "line2";

    const downBody = document.createElement("div");
    downBody.className = "card-icons";

    const previewImg = document.createElement("img");
    previewImg.src = "./icons/icons/preview.svg";
    previewImg.alt = "";

    const manageImg = document.createElement("img");
    manageImg.src = "./icons/icons/manage course.svg";
    manageImg.alt = "";

    const gradeImg = document.createElement("img");
    gradeImg.src = "./icons/icons/grade submissions.svg";
    gradeImg.alt = "";

    const reportImg = document.createElement("img");
    reportImg.src = "./icons/icons/reports.svg";
    reportImg.alt = "";

    downBody.appendChild(previewImg);
    downBody.appendChild(manageImg);
    downBody.appendChild(gradeImg);
    downBody.appendChild(reportImg);

    upperBody.appendChild(courseImg);
    upperBody.appendChild(contentSection);

    cardContainer.appendChild(upperBody);
    cardContainer.appendChild(lineDiv);
    cardContainer.appendChild(downBody);

    parentBody.appendChild(cardContainer);
  });
};

const humbergerMenu = document.querySelector(".expand-menu");
const menuButton = document.querySelector(".menu-bar");
let tgl = false;

menuButton.addEventListener("click", show);

function show (){
    if(tgl===true){
        humbergerMenu.style = "display: flex";
    }else{
        humbergerMenu.style = "display: none";
    }

    tgl = !tgl;  
}
const customDropDownBtn = document.querySelector(".listdonw");

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    if(document.getElementById("myDropdown").classList.contains('show')){
        customDropDownBtn.src = "./icons/icons/list-up.svg";
        
    }else{
        customDropDownBtn.src = "./icons/icons/list-down.svg"
    }
  }

  window.onclick = function(event) {
    if (!event.target.matches('.listdonw')) {
      var dropdowns = document.getElementsByClassName("custom-dropdown");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
          customDropDownBtn.src = "./icons/icons/list-down.svg"
        }
      }
    }
  }
