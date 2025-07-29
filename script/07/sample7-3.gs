function doPost(e) {
  // （1）tryブロック内に通常の処理を記述する
  try {
    const data = JSON.parse(e.postData.contents);
    const event = data.events[0];

    outputLog('webhook受信OK');
    outputLog(event);

    if(event.type === 'message') { handleMessageEvent(event) };
    if(event.type === 'postback') { handlePostbackEvent(event) };
    if(event.type === 'follow') { handleFollowEvent(event)};

  // (2)catchブロック内にエラー時のログ出力関数を仕込む
  } catch(error) {
    outputLog(`[ERROR] ${error.stack}`);
  }
}