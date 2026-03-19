// 햄버거 버튼
const navToggle = document.querySelector(".navmenuBtn");
const nav = document.querySelector("header nav");

if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
        nav.classList.toggle("isOpen");
    });
}

// 모바일에서만: 서브메뉴 토글
const subItems = document.querySelectorAll("nav .lnbBox li.hasSub");

function isMobile() {
    return window.matchMedia("(max-width: 1420px)").matches;
}

subItems.forEach((li) => {
    const trigger = li.querySelector(".lnbTrigger");
    if (!trigger) return;
    trigger.addEventListener("click", (e) => {
        if (!isMobile()) return; // PC에서는 hover만
        e.preventDefault();

    const isOpen = li.classList.toggle("open");
        trigger.setAttribute("aria-expanded", String(isOpen));
    });
});

// 리사이즈 시 모바일 -> PC 넘어가면 열린 것 정리
window.addEventListener("resize", () => {
    if (!isMobile()) {
        subItems.forEach((li) => {
            li.classList.remove("open");
            const trigger = li.querySelector(".lnbTrigger");
            if (trigger) trigger.setAttribute("aria-expanded", "false");
        });
    }
});

// 햄버거 버튼 키보드 접근성
if (navToggle) {
    navToggle.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            nav.classList.toggle("isOpen");
        }
    });
}

// 챔피언 선택
const buttons = document.querySelectorAll(".choice-button");
const viewImg = document.querySelector(".champion-img");
const viewName = document.querySelector(".chamName");
const viewDesc = document.querySelector(".chamNoti");

function updateChampion(button){
const img = button.dataset.img;
const name = button.dataset.name;
const desc = button.dataset.desc;

viewImg.src = img;
viewImg.alt = name;
viewName.textContent = name;
viewDesc.textContent = desc;
}

// 클릭 이벤트
buttons.forEach(button => {
    button.addEventListener("click", () => {

        buttons.forEach(btn => btn.classList.remove("on"));
        button.classList.add("on");

        updateChampion(button);
    });
});

// 초기 실행 
const initial = document.querySelector(".choice-button.on");
if(initial){
    updateChampion(initial);
}