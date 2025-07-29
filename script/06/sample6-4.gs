function sendConfirmQuickReply(replyToken) {
  const confirmText= '日報を登録しますか？'

  const quickReply = {
    items:[
      {
        type: 'action',
        action: {
          type: 'postback',
          label: 'はい',
          data: 'confirm=yes',
          displayText: 'はい'
        }
      },{
        type: 'action',
        action: {
          type: 'postback',
          label: 'いいえ',
          data: 'confirm=no',
          displayText: 'いいえ'
        }
      },
    ]
  }

  const messages = [
    {
      type: 'text',
      text: confirmText,
      quickReply: quickReply
    }
  ]

  sendReplyMessage(replyToken, messages);
}