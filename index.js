let bps = [
  ["130/80 on:21/05/2023"],
  ["135/78 on:20/05/2023"],
  ["132/79 on:19/05/2023"],
  ["120/80 on:18/05/2023"],
  ["123/82 on:17/05/2023"],
];
let sugarValues = [180, 185, 182, 200, 190];

document.getElementById("HealthPage").classList.add("box-hide");
document.getElementById("consultationsPage").classList.add("box-hide");
document.getElementById("remindersPage").classList.add("box-hide");
document.getElementById("dietPage").classList.add("box-hide");

const home = document.getElementById("homePage");
home.addEventListener("click", function (event) {
  home.classList.add("box-hide");
});

const historyButton = document.getElementById("history");
historyButton.addEventListener("click", function () {
  document.getElementById("HealthPage").classList.remove("box-hide");
  document.getElementById("homePage").classList.add("box-hide");
  document.getElementById("consultationsPage").classList.add("box-hide");
  document.getElementById("remindersPage").classList.add("box-hide");
  document.getElementById("dietPage").classList.add("box-hide");
});

const historyBtnOne = document.getElementById("history-check-one");
const historyBtnTwo = document.getElementById("history-check-two");
let clicked1;
historyBtnOne.addEventListener("click", function () {
  if (clicked1 === true) {
    const ul1 = document.getElementById("ul1");
    document.getElementById("one-one").removeChild(ul1);
    clicked1 = false;
  } else {
    const ul1 = document.createElement("ul");
    ul1.id = "ul1";
    for (let i of bps) {
      const li = document.createElement("li");
      li.textContent = i;
      li.classList.add("li");
      ul1.appendChild(li);
    }
    document.getElementById("one-one").appendChild(ul1);
    clicked1 = true;
  }
});

let clicked2;
historyBtnTwo.addEventListener("click", function () {
  if (clicked2 === true) {
    const ul2 = document.getElementById("ul2");
    document.getElementById("one-two").removeChild(ul2);
    clicked2 = false;
  } else {
    const ul2 = document.createElement("ul");
    ul2.id = "ul2";
    for (let i of sugarValues) {
      const li = document.createElement("li");
      li.textContent = i;
      li.classList.add("li");
      ul2.appendChild(li);
    }
    document.getElementById("one-two").appendChild(ul2);
    clicked2 = true;
  }
});

const historyToHomeButton = document.getElementById("historyToHomeButton");
historyToHomeButton.onclick = function () {
  home.classList.remove("box-hide");
  document.getElementById("HealthPage").classList.add("box-hide");
  document.getElementById("consultationsPage").classList.add("box-hide");
  document.getElementById("dietPage").classList.add("box-hide");
};

const consultationsToHomeButton = document.getElementById(
  "consultationsToHomeButton"
);
consultationsToHomeButton.onclick = function () {
  home.classList.remove("box-hide");
  document.getElementById("HealthPage").classList.add("box-hide");
  document.getElementById("consultationsPage").classList.add("box-hide");
  document.getElementById("dietPage").classList.add("box-hide");
};

const consultationsButton = document.getElementById("consultations");
consultationsButton.addEventListener("click", function () {
  document.getElementById("HealthPage").classList.add("box-hide");
  document.getElementById("consultationsPage").classList.remove("box-hide");
  document.getElementById("remindersPage").classList.add("box-hide");
  document.getElementById("dietPage").classList.add("box-hide");
});

let remindersArray = ["1:50"];
const reminderBtn = document.getElementById("reminders");
reminderBtn.addEventListener("click", function () {
  document.getElementById("HealthPage").classList.add("box-hide");
  document.getElementById("consultationsPage").classList.add("box-hide");
  document.getElementById("remindersPage").classList.remove("box-hide");
});

let removing;
function checking(remindersArray) {
  if (remindersArray.length === 0) {
    if (count !== "done") {
      let elep = document.createElement("li");
      elep.textContent = "No reminders! Please add some";
      elep.id = "elep";
      document.getElementById("ul3").appendChild(elep);
    }
  } else {
    try {
      const elep = document.getElementById("elep");
      document.getElementById("ul3").removeChild(elep);
    } catch {}

    let ele = document.createElement("li");
    ele.textContent = remindersArray[remindersArray.length - 1];
    document.getElementById("ul3").appendChild(ele);
    count = "";
  }
}
let count;
if (remindersArray.length === 0) {
  let elep = document.createElement("li");
  elep.textContent = "No reminders! Please add some";
  elep.id = "elep";
  document.getElementById("ul3").appendChild(elep);
  count = "done";
}

const inputTime = document.getElementById("inputTime");
const addReminderButton = document.getElementById("addReminderButton");
addReminderButton.addEventListener("click", function () {
  let val = inputTime.value;
  if (
    val !== undefined &&
    val !== "" &&
    remindersArray.includes(val) === false
  ) {
    remindersArray.push(val);
    checking(remindersArray);
  }
});

const dietBtn = document.getElementById("dietPlans");
dietBtn.addEventListener("click", function () {
  document.getElementById("HealthPage").classList.add("box-hide");
  document.getElementById("consultationsPage").classList.add("box-hide");
  document.getElementById("remindersPage").classList.add("box-hide");
  document.getElementById("dietPage").classList.remove("box-hide");
});

const plansToHomeButton = document.getElementById("plansToHomeButton");
plansToHomeButton.addEventListener("click", function () {
  home.classList.remove("box-hide");
  document.getElementById("HealthPage").classList.add("box-hide");
  document.getElementById("consultationsPage").classList.add("box-hide");
  document.getElementById("dietPage").classList.add("box-hide");
});

const remindersToHomeButton = document.getElementById("remindersToHomeButton");
remindersToHomeButton.addEventListener("click", function () {
  home.classList.remove("box-hide");
  document.getElementById("HealthPage").classList.add("box-hide");
  document.getElementById("consultationsPage").classList.add("box-hide");
  document.getElementById("dietPage").classList.add("box-hide");
  document.getElementById("remindersPage").classList.add("box-hide");
});

const formPage = document.getElementById("formPage");
formPage.addEventListener("submit", function (event) {
  event.preventDefault();
});
