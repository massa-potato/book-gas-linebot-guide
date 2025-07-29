function getUserName(userId) {
  const url = 'https://api.line.me/v2/bot/profile/' + userId;
  const method = 'GET';

  const headers = {
      Authorization: 'Bearer ' + TOKEN
  };

  const params = {
      method: method,
      headers: headers
  };

  const res = UrlFetchApp.fetch(url, params);

  const profile = JSON.parse(res.getContentText())
  const userName = profile.displayName;

  return userName;
}