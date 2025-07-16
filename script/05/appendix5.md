# appendix5_ボタンにアクションを設定しよう

## ドキュメントリンク

[【参考】アクション | LINE Developers](https://developers.line.biz/ja/docs/messaging-api/actions/)

[【参考】Messaging APIリファレンス「メッセージアクション」 | LINE Developers](https://developers.line.biz/ja/reference/messaging-api/#message-action)

[【参考】Messaging APIリファレンス「ポストバックアクション」 | LINE Developers](https://developers.line.biz/ja/reference/messaging-api/#postback-action)

[【参考】Messaging APIリファレンス「日時選択アクション」 | LINE Developers](https://developers.line.biz/ja/reference/messaging-api/#datetime-picker-action)

[【参考】Messaging APIリファレンス「位置情報アクション」 | LINE Developers](https://developers.line.biz/ja/reference/messaging-api/#location-action)

[【参考】Messaging APIリファレンス「URIアクション」 | LINE Developers](https://developers.line.biz/ja/reference/messaging-api/#uri-action)

[【参考】LINE URLスキームでLINEの機能を使う | LINE Developers](https://developers.line.biz/ja/docs/line-login/using-line-url-scheme/)

## オブジェクトの例

### メッセージアクションのオブジェクト例

#### メッセージオブジェクト

```javascript
{
  type: 'template',
  altText: '作業記録ボタンテンプレート',
  template: {
    type: 'buttons',
    thumbnailImageUrl: 'https://raw.githubusercontent.com/massa-potato/book-farming-line-bot/refs/heads/main/picture/01.jpg',
    title: '作業を記録する',
    text: '使用した作業機を選択してください。',
    actions: [  // アクションオブジェクト
      {
        type: 'message',
        label: '作業機A',
        text: '作業機Aを選択しました。'
      },{
        type: 'message',
        label: '作業機B',
        text: '作業機Bを選択しました。'
      },{
        type: 'message',
        label: '作業機C',
        text: '作業機Cを選択しました。'
      }
    ]
  }
}
```

#### アクションオブジェクト

```javascript
{
  type: 'message',
  label: '作業機A',
  text: '作業機Aを選択しました。'
}
```

#### イベントオブジェクト

```json
{
  "type": "message",
  "message": {
    "type": "text",
    "id": "xxxx",
    "quoteToken": "xxxxxxxx",
    "text": "作業機Aを選択しました。"
  },
  "webhookEventId": "xxxx",
  "deliveryContext": {
    "isRedelivery": false
  },
  "timestamp": 1742245787501,
  "source": {
    "type": "user",
    "userId": "xxxx"
  },
  "replyToken": "xxxx",
  "mode": "active"
}
```

### ポストバックアクションのオブジェクト例

#### メッセージオブジェクト

```javascript
{
  type: 'text',
  text: 'この日報を登録しますか？',
  quickReply: {
    items: [
      {
        type: 'action',
        action: { // アクションオブジェクト
          type: 'postback',
          label: 'はい',
          data: 'confirm=yes',
          displayText: 'はい'
        }
      },
      {
        type: 'action',
        action: { // アクションオブジェクト
          type: 'postback',
          label: 'いいえ',
          data: 'confirm=no',
          displayText: 'いいえ'
        }
      }
    ]
  }
}
```

#### アクションオブジェクト

```javascript
{
  type: 'postback',
  label: 'はい',
  data: 'confirm=yes',
  displayText: 'はい'
}
```

#### イベントオブジェクト

```json
{
  "type": "postback",
  "postback": {
    "data": "confirm=yes"
  },
  "webhookEventId": "xxxx",
  "deliveryContext": {
    "isRedelivery": false
  },
  "timestamp": 1742250271537,
  "source": {
    "type": "user",
    "userId": "xxxx"
  },
  "replyToken": "xxxx",
  "mode": "active"
}
```

### 日時選択アクションのオブジェクト例

#### メッセージオブジェクト

```javascript
{
  type: 'template',
  altText: 'スタート時間を入力',
  template: {
    type: 'buttons',
    text: 'スタート時間を入力してください。',
    actions: [  // アクションオブジェクト
      {
        type: 'datetimepicker',
        label: '入力',
        data: 'chooseStartTime',
        mode: 'datetime'
      }
    ]
  }
}
```

#### アクションオブジェクト

```javascript
{
  type: 'datetimepicker',
  label: '入力',
  data: 'chooseStartTime',
  mode: 'datetime'
}
```

#### イベントオブジェクト

```json
{
  "type": "postback",
  "postback": {
    "data": "chooseStartTime",
    "params": {
      "datetime": "2025-03-20T08:15"
    }
  },
  "webhookEventId": "xxxx",
  "deliveryContext": {
    "isRedelivery": false
  },
  "timestamp": 1742417079872,
  "source": {
    "type": "user",
    "userId": "xxxx"
  },
  "replyToken": "xxxx",
  "mode": "active"
}
```

### イベントを送信しないアクションのオブジェクト例

#### 位置情報アクション

```javascript
{
  type: 'location',
  label: '位置情報を開く',
}
```

#### URIアクション

```javascript
{
  type: 'uri',
  label: 'Webサイトを開く',
  uri: 'https://example.com'
}
```
