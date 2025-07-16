/**
* メッセージイベントを処理する関数
* 「作業を記録」というテキストが送られたときに日報入力を開始
* 
* @param {Object} event - イベントオブジェクト
*/
function handleMessageEvent(event) {
  const messageText = event.message.text;
  const replyToken = event.replyToken;

  if(messageText === '作業を記録') { sendSagyokirokuButton(replyToken); }
}