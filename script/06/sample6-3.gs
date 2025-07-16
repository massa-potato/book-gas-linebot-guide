/**
* 作業記録ボタンテンプレートを送信する関数
* 
* @param {string} replyToken - リプライトークン
*/
function sendSagyokirokuButton(replyToken) {
  const actions = [
    {
      type: 'postback',
      label: '作業機A',
      data: 'tractor=作業機A'
    },{
      type: 'postback',
      label: '作業機B',
      data: 'tractor=作業機B'
    },{
      type: 'postback',
      label: '作業機C',
      data: 'tractor=作業機C'
    }
  ];

  const messages = [
    {
      type: 'template',
      altText: '作業記録ボタンテンプレート',
      template: {
        type: 'buttons',
        thumbnailImageUrl: 'https://raw.githubusercontent.com/massa-potato/book-farming-line-bot/refs/heads/main/picture/01.jpg',
        title: '作業を記録する',
        text: '使用した作業機を選択してください。',
        actions: actions
      }
    }
  ];

  sendReplyMessage(replyToken, messages);
}