/**
* 選択内容をシートから読み込む関数
* 「ユーザー情報」シートの指定されたユーザー行のデータをすべて読み込み
* 
* @param {string} userId - 日報入力者のユーザーのID
* @return {Array} ユーザーの一時データを含む配列（ユーザーIDに一致する行データ）
*/
function getTempDataFromUserSheet(userId) {
  const userList = USER_SHEET.getDataRange().getValues();

  for(const data of userList) {
    if(data[0] === userId) {
      return data;
    }
  }
}