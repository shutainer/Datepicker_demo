'use strict';
{

  //曜日
  const weeks = ['日', '月', '火', '水', '木', '金', '土'];

  //現在日付
  const date = new Date();

  //現在西暦
  let year = date.getFullYear();

  //現在月
  let month = date.getMonth() + 1;

  //表示月数
  const config = {
    show: 3,
  };


//関数 カレンダー表示
  function showCalender(year, month) {
    for (let i = 0; i < config.show; i++) {
      const calenderHtml = createCalender(year, month);
      const sec = document.createElement('section');
      sec.innerHTML = calenderHtml;
      document.querySelector('#calender').appendChild(sec);
      month++;
      if (month > 12) {
        year++;
        month = 1;
      }
    }
  }


//関数　カレンダー作成
  function createCalender(year, month) {
    //つき最初の日の情報
    const startDate = new Date(year, month - 1, 1);
    //付き最後の日の情報
    const endDate = new Date(year, month, 0);
    //月の末日
    const endDayCount = endDate.getDate();
    //前月最後の日の情報
    const lastMonthEndDate = new Date(year, month - 1, 0);
    //前月末日
    const lastMonthendDayCount = lastMonthEndDate.getDate();
    //月の最初の日の曜日を取得
    const startDay = startDate.getDay();
    //日にちのカウント変数宣言
    let dayCount = 1;
    //html変数宣言
    let calenderHtml = '';
    calenderHtml += '<h1>' + year + '/' + month + '</h1>';
    calenderHtml += '<table>';
    //曜日を並べる
    for (let i = 0; i < weeks.length; i++) {
      calenderHtml += '<td>' + weeks[i] + '</td>';
    }
    //日付を並べる
    for (let w = 0; w < 6; w++) {
      calenderHtml += '<tr>';
      for (let d = 0; d < 7; d++) {
        if (w == 0 && d < startDay) {
          let num = lastMonthendDayCount - startDay + d + 1;
          calenderHtml += '<td class="is-disabled">' + num + '</td>';
        } else if (dayCount > endDayCount) {
          let num = dayCount - endDayCount;
          calenderHtml += '<td class="is-disabled">' + num + '</td>';
          dayCount++;
        } else {
          calenderHtml += `<td class="calendar_td" data-date="${year}/${month}/${dayCount}">${dayCount}</td>`;
          dayCount++;
        }
      }
      calenderHtml += '</tr>';

    }
    calenderHtml += '</table>';

    return calenderHtml;

  }

  function moveCalender(e) {
    document.querySelector('#calender').innerHTML = '';

    if (e.target.id === 'prev') {
      month--;
      if (month < 1) {
        year--;
        month = 12;
      }
    }

    if (e.target.id === 'next') {
      month++;
      if (month > 12) {
        year++;
        month = 1;
      }
    }
    showCalender(year, month);
  }

  document.querySelector('#prev').addEventListener('click', moveCalender);
  document.querySelector('#next').addEventListener('click', moveCalender);

  document.addEventListener("click", function(e) {
    if(e.target.classList.contains("calendar_td")) {
        alert('クリックした日付は' + e.target.dataset.date + 'です');
    }
  });

  showCalender(year, month);

  }
