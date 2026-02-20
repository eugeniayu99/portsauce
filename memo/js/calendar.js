// Date 객체 생성
let caldate = new Date();

const renderCalendar = () => {
  const viewYear = caldate.getFullYear();
  const viewMonth = caldate.getMonth();

  // year-month 채우기
  document.querySelector('.year-month').textContent = `${viewYear}년 ${viewMonth + 1}월`;

  // 지난 달 마지막 Date, 이번 달 마지막 Date
  const prevLast = new Date(viewYear, viewMonth, 0);
  const thisLast = new Date(viewYear, viewMonth + 1, 0);

  const PLDate = prevLast.getDate();
  const PLDay = prevLast.getDay();

  const TLDate = thisLast.getDate();
  const TLDay = thisLast.getDay();

  // Dates 기본 배열들
  const prevDates = [];
  const thisDates = [...Array(TLDate + 1).keys()].slice(1);
  const nextDates = [];

  // prevDates 계산
  if (PLDay !== 6) {
    for (let i = 0; i < PLDay + 1; i++) {
      prevDates.unshift(PLDate - i);
    }
  }

  // nextDates 계산
  for (let i = 1; i < 7 - TLDay; i++) {
    nextDates.push(i)
  }

  // Dates 합치기
  const dates = prevDates.concat(thisDates, nextDates);

  // Dates 정리
 const firstDateIndex = dates.indexOf(1);
  const lastDateIndex = dates.lastIndexOf(TLDate);
  dates.forEach((caldate, i) => {
    const condition = i >= firstDateIndex && i < lastDateIndex + 1
                      ? 'this'
                      : 'other';

    dates[i] = `<div class="date"><span class="${condition}">${caldate}</span></div>`;
  })

  // Dates 그리기
  document.querySelector('.dates').innerHTML = dates.join('');
}

renderCalendar();
const prevMonth = () => {
  caldate.setDate(1);
  caldate.setMonth(caldate.getMonth() - 1);
  renderCalendar();
}

const nextMonth = () => {
  caldate.setDate(1);
  caldate.setMonth(caldate.getMonth() + 1);
  renderCalendar();
}

const goToday = () => {
  caldate = new Date();
  renderCalendar();
}
