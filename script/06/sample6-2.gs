function sendReplyMessage(replyToken, messages) {
  const url = 'https://api.line.me/v2/bot/message/reply';
  const method = 'POST';

  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + TOKEN
  };

  const body = {
    replyToken: replyToken,
    messages: messages
  };

  const params = {
    method: method,
    headers: headers,
    payload: JSON.stringify(body)
  };

  UrlFetchApp.fetch(url, params);
}