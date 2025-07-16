/*
サンプル4-3 友だち追加時にプロフィールを取得するスクリプト
*/

function doPost(e) {
  // (1-1)受け取ったイベント情報の解析
  const data = JSON.parse(e.postData.contents);
  const event = data.events[0];

  // (1-2)イベントハンドリング
  if(event.type == 'follow') { getProfile(event) }
}

function getProfile(event) {
  // (2-1)必要な情報
  const token = '【チャネルアクセストークン】';

  // (2-2)イベントオブジェクトから必要な要素を取り出す
  const userId = event.source.userId;

  // (2-3)エンドポイントとHTTPメソッド
  const url = 'https://api.line.me/v2/bot/profile/' + userId;
  const method = 'GET';

  // (2-4)リクエストヘッダー
  const headers = {
    Authorization: 'Bearer ' + token
  };

  // (2-5)リクエストパラメータをまとめる
  const params = {
    method: method,
    headers: headers
  };

  // (2-6)リクエスト送信とレスポンス取得
  const res = UrlFetchApp.fetch(url, params);

  // (2-7)レスポンス解析
  const profile = JSON.parse(res.getContentText())
  const userName = profile.displayName;

  // (2-8)シートへ出力
  outputLog(userName);