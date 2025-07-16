/*
サンプル4-1 イベント情報をスプレッドシートに出力するスクリプト
*/

function doPost(e) {
  // (1-1)受け取ったイベント情報の解析
  const data = JSON.parse(e.postData.contents);

  // (1-2)ログを出力
  outputLog(data);
}

function outputLog(data) {
  // (2-1)ログ保存用のシートを取得
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('シート1');

  // (2-2)ログを出力
  sheet.appendRow([
    new Date(), 
    JSON.stringify(data)
  ]);
}