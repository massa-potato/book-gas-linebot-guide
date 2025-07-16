/**
* 選択内容をシートに一時保存する関数
* 「ユーザー情報」シートの指定されたユーザー行の特定列に値を設定
* 
* @param {string} userId - 日報入力者のユーザーID
* @param {*} param - 設定する値（作業機名や日時など）
* @param {number} targetCol - 設定する列番号
*/
function setTempDataToUserSheet(userId, param, targetCol) {
  const userIdsList = USER_SHEET.getRange(1, 1, USER_SHEET.getLastRow(), 1).getValues().flat();
  const targetRow = userIdsList.indexOf(userId) + 1;

  USER_SHEET.getRange(targetRow, targetCol).setValue(param);
}