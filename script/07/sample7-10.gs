function sendBroadcastMessage(messages) {
  const url = 'https://api.line.me/v2/bot/message/broadcast';
  const method = 'POST';

  const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + TOKEN
  };
  const body = {
      messages: messages
  };

  const options = {
      method: method,
      headers: headers,
      payload: JSON.stringify(body)
  };

  UrlFetchApp.fetch(url, options);
}