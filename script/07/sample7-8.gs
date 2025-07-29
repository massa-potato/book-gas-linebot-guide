function sendEndDatetimePicker(replyToken) {

  const actions = [
    {
      type: 'datetimepicker',
      label: '入力',
      data: 'chooseEndTime',
      mode: 'datetime'
    }
  ];

  const messages = [
    {
      type: 'template',
      altText: '作業を終えた時間を入力',
      template: {
        type: 'buttons',
        text: '作業を終えた時間を入力してください。',
        actions: actions
      }
    }
  ];

  sendReplyMessage(replyToken, messages);
}