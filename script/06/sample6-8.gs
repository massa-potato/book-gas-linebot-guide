/**
* 確定した日報をシートに保存する関数
* 「作業記録シート」に新しい行としてデータを追加（現在のタイムスタンプを含む）
* 
* @param {Array} data - 登録する作業記録データの配列
*/
function setDataToKirokuSheet(data) {
  data.push(new Date());
  KIROKU_SHEET.appendRow(data);
}