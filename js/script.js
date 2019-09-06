'use strict';
{

  //曜日
  const weeks = ['日', '月', '火', '水', '木', '金', '土'];

  //現在日付
  const date = new Date();

  //現在西暦
  const year = date.getFullYear();

  //現在月
  const month = date.getMonth() + 1;

  //つき最初の日の情報
  const startDate = new Date(year, month - 1, 1);

//付き最後の日の情報
  const endDate = new Date(year, month, 0);

  //前月最後の日の情報
  const lastMonthEndDate = new Date(year, month - 1, 0);

  //前月末日
  const lastMonthendDayCount = lastMonthEndDate.getDate();

  //月の末日
  const endDayCount = endDate.getDate();

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
        calenderHtml += '<td></td>';

      } else {
        calenderHtml += '<td>' + dayCount + '</td>';
        dayCount++;
      }
    }
    calenderHtml += '</tr>';

  }
  calenderHtml += '</table>';

  document.querySelector('#calender').innerHTML = calenderHtml;
}
