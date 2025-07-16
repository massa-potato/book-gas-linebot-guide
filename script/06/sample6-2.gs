/**
* Messaging APIを使って応答メッセージを送信する関数
* 
* @param {string} replyToken - リプライトークン
* @param {Array} messages - 送信するメッセージオブジェクトの配列
*/
function sendReplyMessage(replyToken, messages) {
  const url = 'https://api.line.me/v2/bot/message/reply';
  const method = 'POST';

  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + TOKEN
  };

  const body = {
    replyToken: replyToken,
    messages: messages
  };

  const params = {
    method: method,
    headers: headers,
    payload: JSON.stringify(body)
  };

  UrlFetchApp.fetch(url, params);
}