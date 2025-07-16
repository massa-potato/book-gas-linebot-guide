/*
 サンプル4-2 応答メッセージでおうむ返しをするスクリプト
*/

function doPost(e) {
  // (1-1)受け取ったイベント情報の解析
  const data = JSON.parse(e.postData.contents);
  const event = data.events[0];

  // (1-2)イベントハンドリング
  if(event.type == 'message') { sendReplyMessage(event) }
}

function sendReplyMessage(event) {
  // (2-1)必要な情報
  const token = '【チャネルアクセストークン】';

  // (2-2)イベントオブジェクトから必要な要素を取り出す
  const userMessage = event.message.text;
  const replyToken = event.replyToken;

  // (2-3)メッセージオブジェクト
  const messages = [{ type: 'text', text: userMessage }];

  // (2-4)エンドポイントとHTTPメソッド
  const url = 'https://api.line.me/v2/bot/message/reply';
  const method = 'POST';

  // (2-5)リクエストヘッダーとボディ
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + token
  };
  const body = {
    replyToken: replyToken,
    messages: messages
  };

  // (2-6)リクエストパラメータをまとめる
  const params = {
    method: method,
    headers: headers,
    payload: JSON.stringify(body)
  };

  // (2-7)リクエスト送信
  UrlFetchApp.fetch(url, params);
}