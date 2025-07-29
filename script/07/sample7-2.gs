function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const event = data.events[0];

  // (1)ログ出力関数を仕込む
  outputLog('webhook受信OK');
  outputLog(event);

  if(event.type === 'message') { handleMessageEvent(event) };
  if(event.type === 'postback') { handlePostbackEvent(event) };
  if(event.type === 'follow') { handleFollowEvent(event)};
}