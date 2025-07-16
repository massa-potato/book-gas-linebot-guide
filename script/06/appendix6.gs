/*
このファイルは、sample6-1からsample6-12をひとつのファイルにまとめたものです。
*/ 

// 必要な情報
const TOKEN = '【チャネルアクセストークン】';

// シートの情報
const USER_SHEET = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('ユーザー情報');
const KIROKU_SHEET = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('作業記録');


/**
* Messaging APIを使って応答メッセージを送信する関数
* 
* @param {string} replyToken - リプライトークン
* @param {Array} messages - 送信するメッセージオブジェクトの配列
*/
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


/**
* 作業記録ボタンテンプレートを送信する関数
* 
* @param {string} replyToken - リプライトークン
*/
function sendSagyokirokuButton(replyToken) {
  const actions = [
    {
      type: 'postback',
      label: '作業機A',
      data: 'tractor=作業機A'
    },{
      type: 'postback',
      label: '作業機B',
      data: 'tractor=作業機B'
    },{
      type: 'postback',
      label: '作業機C',
      data: 'tractor=作業機C'
    }
  ];

  const messages = [
    {
      type: 'template',
      altText: '作業記録ボタンテンプレート',
      template: {
        type: 'buttons',
        thumbnailImageUrl: 'https://raw.githubusercontent.com/massa-potato/book-farming-line-bot/refs/heads/main/picture/01.jpg',
        title: '作業を記録する',
        text: '使用した作業機を選択してください。',
        actions: actions
      }
    }
  ];

  sendReplyMessage(replyToken, messages);
}


/**
 * 確認のクイックリプライを送信する関数
 * 
 * @param {string} replyToken - リプライトークン
 * @param {string} userId - 日報入力者のユーザーID
 */
function sendConfirmQuickReply(replyToken) {
  const confirmText= '日報を登録しますか？'

  const quickReply = {
    items:[
      {
        type: 'action',
        action: {
          type: 'postback',
          label: 'はい',
          data: 'confirm=yes',
          displayText: 'はい'
        }
      },{
        type: 'action',
        action: {
          type: 'postback',
          label: 'いいえ',
          data: 'confirm=no',
          displayText: 'いいえ'
        }
      },
    ]
  }

  const messages = [
    {
      type: 'text',
      text: confirmText,
      quickReply: quickReply
    }
  ]

  sendReplyMessage(replyToken, messages);
}


/**
 * ユーザー情報をシートに追加する関数
 * 「ユーザー情報」シートにユーザーIDとユーザー名を追加する
 * ただし、すでに同じユーザーIDが存在する場合は何も行わない
 * 
 * @param {string} userId - 追加するユーザーのID
 * @param {string} userName - 追加するユーザーの名前
 */
function setUserDataToUserSheet(userId) {
  const userData = USER_SHEET.getDataRange().getValues();
  userData.shift();

  if(userData) {
      for(const user of userData) {
        if(user[0] === userId) return; // userIdが既に登録済みなら何もしない
      } 
  }

  USER_SHEET.appendRow([userId]);
}


/**
* 選択内容をシートに一時保存する関数
* 「ユーザー情報」シートの指定されたユーザー行の特定列に値を設定
* 
* @param {string} userId - 日報入力者のユーザーID
* @param {*} param - 設定する値（作業機名や日時など）
* @param {number} targetCol - 設定する列番号
*/
function setTempDataToUserSheet(userId, param, targetCol) {
  const userIdsList = USER_SHEET.getRange(1, 1, USER_SHEET.getLastRow(), 1).getValues().flat();
  const targetRow = userIdsList.indexOf(userId) + 1;

  USER_SHEET.getRange(targetRow, targetCol).setValue(param);
}


/**
* 選択内容をシートから読み込む関数
* 「ユーザー情報」シートの指定されたユーザー行のデータをすべて読み込み
* 
* @param {string} userId - 日報入力者のユーザーのID
* @return {Array} ユーザーの一時データを含む配列（ユーザーIDに一致する行データ）
*/
function getTempDataFromUserSheet(userId) {
  const userList = USER_SHEET.getDataRange().getValues();

  for(const data of userList) {
    if(data[0] === userId) {
      return data;
    }
  }
}


/**
* 確定した日報をシートに保存する関数
* 「作業記録シート」に新しい行としてデータを追加（現在のタイムスタンプを含む）
* 
* @param {Array} data - 登録する作業記録データの配列
*/
function setDataToKirokuSheet(data) {
  data.push(new Date());
  KIROKU_SHEET.appendRow(data);
}


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


/**
* メッセージイベントを処理する関数
* 「作業を記録」というテキストが送られたときに日報入力を開始
* 
* @param {Object} event - イベントオブジェクト
*/
function handleMessageEvent(event) {
  const messageText = event.message.text;
  const replyToken = event.replyToken;

  if(messageText === '作業を記録') { sendSagyokirokuButton(replyToken); }
}


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


/**
* フォローイベントを処理する関数
* ユーザー情報をスプレッドシートに登録（既存ユーザーの場合は何もしない）
* 
* @param {Object} event - イベントオブジェクト
*/
function handleFollowEvent(event) {
  const userId = event.source.userId;
  setUserDataToUserSheet(userId);
}