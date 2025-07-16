/**
* フォローイベントを処理する関数
* ユーザー情報をスプレッドシートに登録（既存ユーザーの場合は何もしない）
* 
* @param {Object} event - イベントオブジェクト
*/
function handleFollowEvent(event) {
  const userId = event.source.userId;
  setUserDataToUserSheet(userId);
}