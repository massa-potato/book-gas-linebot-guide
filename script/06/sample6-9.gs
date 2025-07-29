function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const event = data.events[0];

  if(event.type === 'message') { handleMessageEvent(event) };
  if(event.type === 'postback') { handlePostbackEvent(event) };
  if(event.type === 'follow') { handleFollowEvent(event)};
}