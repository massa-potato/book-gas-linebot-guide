/**
* ポストバックイベントを処理する関数
* ポストバックデータに応じて以下の処理を実行:
*  - 作業機選択後の処理
*  - 確認選択後の処理（作業記録の登録または再入力）
* 
* @param {Object} event - イベントオブジェクト
*/
function handlePostbackEvent(event) {
  const replyToken = event.replyToken;
  const userId = event.source.userId;

  const [category, param] = event.postback.data.split('=');

  // ①作業機を選択した後の処理
  if(category === 'tractor') {

    setTempDataToUserSheet(userId, param, 2);
    sendConfirmQuickReply(replyToken);
  }

  // ②確認クイックリプライを選択した後の処理
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