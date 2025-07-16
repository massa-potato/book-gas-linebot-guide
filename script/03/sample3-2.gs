/*
サンプル3-2 ブロードキャストメッセージを送るスクリプト
*/

function sendBroadcastMessage() {
  // (1)必要な情報
  const token = '【チャネルアクセストークン】';
 
  // (2)メッセージオブジェクト
  const messages = [{ type: 'text', text: '皆さんこんにちは！' }];

  // (3)エンドポイントとHTTPメソッド
  const url = 'https://api.line.me/v2/bot/message/broadcast';
  const method = 'POST';

  // (4)リクエストヘッダーとボディ
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + token
  };
  const body = {
    messages: messages
  };

  // (5)リクエストヘッダーとボディをまとめる
  const params = {
    method: method,
    headers: headers,
    payload: JSON.stringify(body)
  };

  // (6)リクエスト送信
  UrlFetchApp.fetch(url, params);
}