/*
 サンプル5-1 ボタン付きメッセージを送信するスクリプト
*/

function sendPushMessage() {
  // (1)必要な情報
  const userId = '【ユーザーID】';
  const token = '【チャネルアクセストークン】';

  // (2)メッセージオブジェクト
  const messages = [
    {
      type: 'template',
      altText: '作業記録ボタンテンプレート',
      template: {
        type: 'buttons',
        thumbnailImageUrl: 'https://raw.githubusercontent.com/massa-potato/book-farming-line-bot/refs/heads/main/picture/01.jpg',
        title: '作業を記録する',
        text: '使用した作業機を選択してください。',
        actions: [  //アクションオブジェクト
          {
            type: 'message',
            label: '作業機A',
            text: '作業機Aを選択しました。'
          },{
            type: 'message',
            label: '作業機B',
            text: '作業機Bを選択しました。'
          },{
            type: 'message',
            label: '作業機C',
            text: '作業機Cを選択しました。'
          }
        ]
      }
    }
  ];

  // (3)エンドポイントとHTTPメソッド
  const url = 'https://api.line.me/v2/bot/message/push';
  const method = 'POST';

  // (4)リクエストヘッダーとボディ
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + token
  };
  const body = {
    to: userId,
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