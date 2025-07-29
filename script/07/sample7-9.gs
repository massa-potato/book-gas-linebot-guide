ion handlePostbackEvent(event) {
  const replyToken = event.replyToken;
  const userId = event.source.userId;

  const [category, param] = event.postback.data.split('=');

  // ①作業機を選択した後の処理
  if(category === 'tractor') {

    setTempDataToUserSheet(userId, param, 3);
    sendStartDatetimePicker(replyToken);
  }

  // ②スタート時間を入力した後の処理
  if(category === 'chooseStartTime') {

    setTempDataToUserSheet(userId, event.postback.params.datetime, 4);
    sendEndDatetimePicker(replyToken);
  }

  // ③終了時間を入力した後の処理
  if(category === 'chooseEndTime') {

    setTempDataToUserSheet(userId, event.postback.params.datetime, 5);
    sendConfirmQuickReply(replyToken);
  }

  // ④確認クイックリプライを選択した後の処理
  if(category === 'confirm') {
    let messages;

    if(param === 'yes') {
      const tempData = getTempDataFromUserSheet(userId);
      setDataToKirokuSheet(tempData);
      messages = [{type:'text', text:'登録しました！'}];
    }

    if(param === 'no') {
      messages = [{type:'text', text:'もう一度入力してください。'}];
    }

    sendReplyMessage(replyToken, messages);
  }
}