// DOM
const resultBox = document.getElementById("eu-game-result-box");
const resultTextEl = document.getElementById("eu-game-result-text");
const comImgEl = document.getElementById("com-first-img");
const resetBtn = document.getElementById("btn-reset");
const choiceButtons = document.querySelectorAll(".content-srp");

// STATE
let myStatus = "";   // 사용자 선택
let comStatus = "";  // 컴퓨터 선택
let resultText = ""; // 결과 문구

// CONST
const GAME_ITEMS = ["가위", "바위", "보"];
const COM_IMAGE_MAP = {
  "가위": "com01.jpg",
  "바위": "com02.jpg",
  "보": "com03.jpg",
};

// INIT
bindEvents();
gameReset(); 

function bindEvents() {
  choiceButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const choice = btn.dataset.choice;
      gameStart(choice);
    });
  });

  resetBtn.addEventListener("click", gameReset);
}

function gameReset() {
  myStatus = "";
  comStatus = "";
  resultText = "";

  // UI 초기화
  resultBox.style.display = "none";
  resultTextEl.textContent = "";
  comImgEl.src = "./images/com.jpg";
  comImgEl.alt = "컴퓨터 기본 이미지";
}

function gameStart(choice) {
  myStatus = choice;

  comStatus = makeComputerStatus(myStatus); // 컴퓨터 선택 생성
  resultText = compareResult(myStatus, comStatus);

  // UI 반영
  resultBox.style.display = "block";
  resultTextEl.textContent = resultText;

  const imgFile = COM_IMAGE_MAP[comStatus];
  comImgEl.src = `./images/${imgFile}`;
  comImgEl.alt = `컴퓨터 선택: ${comStatus}`;
}

/**
 * 80% 확률로 비김
 * 나머지 20%는 다른 두 가지 중 랜덤
 */
function makeComputerStatus(myChoice) {
  const pool = [];
  for (let i = 0; i < 8; i++) pool.push(myChoice);
  GAME_ITEMS.forEach((item) => {
    if (item !== myChoice) pool.push(item);
  });
  return pool[Math.floor(Math.random() * pool.length)];
}

function compareResult(me, com) {
  if (
    (me === "가위" && com === "바위") ||
    (me === "바위" && com === "보") ||
    (me === "보" && com === "가위")
  ) return "졌습니다.";

  if (
    (me === "가위" && com === "보") ||
    (me === "바위" && com === "가위") ||
    (me === "보" && com === "바위")
  ) return "이겼습니다.";

  return "비겼습니다.";
}