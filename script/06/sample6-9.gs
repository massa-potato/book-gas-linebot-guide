/**
* LINE Messaging APIからのWebhookイベントを受け取る関数
* 
* @param {Object} e - POSTリクエストのイベント情報が入ったオブジェクト
*/
function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const event = data.events[0];

  if(event.type === 'message') { handleMessageEvent(event) };
  if(event.type === 'postback') { handlePostbackEvent(event) };
  if(event.type === 'follow') { handleFollowEvent(event)};
}