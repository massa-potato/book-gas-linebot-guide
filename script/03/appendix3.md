# appendix3_LINEにメッセージを送ってみよう

## ドキュメントリンク

[【参考】メッセージタイプ | LINE Developers](https://developers.line.biz/ja/docs/messaging-api/message-types/)

[【参考】メッセージを送信する | LINE Developers](https://developers.line.biz/ja/docs/messaging-api/sending-messages/)

[【参考】Messaging APIリファレンス「プッシュメッセージを送る」 | LINE Developers](https://developers.line.biz/ja/reference/messaging-api/#send-push-message)

[【参考】Messaging APIリファレンス「ブロードキャストメッセージを送る」 | LINE Developers](https://developers.line.biz/ja/reference/messaging-api/#send-broadcast-message)

[【参考】Messaging APIリファレンス「テキストメッセージ」 | LINE Developers](https://developers.line.biz/ja/reference/messaging-api/#text-message)  

[【参考】Messaging APIリファレンス「画像メッセージ」 | LINE Developers](https://developers.line.biz/ja/reference/messaging-api/#image-message)

[【参考】Messaging APIリファレンス「位置情報メッセージ」 | LINE Developers](https://developers.line.biz/ja/reference/messaging-api/#location-message)

[【参考】Messaging APIリファレンス「テンプレートメッセージ」 | LINE Developers](https://developers.line.biz/ja/reference/messaging-api/#template-messages)

[【参考】Messaging APIリファレンス「クイックリプライ」 | LINE Developers](https://developers.line.biz/ja/reference/messaging-api/#quick-reply)

## オブジェクトの例

### 単方向メッセージのオブジェクト例

#### テキストメッセージ

```javascript
{
  type: 'text',
  text: 'これはテキストメッセージです。\n改行もできます$',
  emojis: [
    {
      index: 23,
      productId: '5ac1bfd5040ab15980c9b435',
      emojiId: '002'
    }
  ]
}
```

#### 画像メッセージ

```javascript
{
  type: 'image',
  originalContentUrl: 'https://raw.githubusercontent.com/massa-potato/book-farming-line-bot/refs/heads/main/picture/11.jpg',
  previewImageUrl: 'https://raw.githubusercontent.com/massa-potato/book-farming-line-bot/refs/heads/main/picture/11.jpg'
}
```

#### 位置情報メッセージ

```javascript
{
  type: 'location',
  title: '帯広空港',
  address: '北海道帯広市泉町西9線中8-41',
  latitude: 42.732228,
  longitude: 143.212716
}
```

### 双方向メッセージのオブジェクト例

#### ボタンテンプレート

```javascript
{
  type: 'template',
  altText: '作業記録ボタンテンプレート',
  template: {
    type: 'buttons',
    thumbnailImageUrl: 'https://raw.githubusercontent.com/massa-potato/book-farming-line-bot/refs/heads/main/picture/01.jpg',
    title: '作業を記録する',
    text: '使用した作業機を選択してください。',
    actions: [
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

#### 画像カルーセルテンプレート

```javascript
{
  type: 'template',
  altText: '作業記録画像カルーセルテンプレート',
  template: {
    type: 'image_carousel',
    columns: [
      {
        imageUrl: 'https://raw.githubusercontent.com/massa-potato/book-farming-line-bot/refs/heads/main/picture/02.jpg',
        action: {
          type: 'message',
          label: '作業機A',
          text: '作業機Aを選択しました。'
        } 
      },{
        imageUrl: 'https://raw.githubusercontent.com/massa-potato/book-farming-line-bot/refs/heads/main/picture/03.jpg',
        action: {
          type: 'message',
          label: '作業機B',
          text: '作業機Bを選択しました。'
        }
      }
    ]
  }
}
```

### クイックリプライのオブジェクト例

```javascript
{
  type: 'text',
  text: 'この日報を登録しますか？',
  quickReply: {
    items: [
      {
        type: 'action',
        action: {
          type: 'postback',
          label: 'はい',
          data: 'confirm=yes',
          displayText: 'はい'
        }
      },
      {
        type: 'action',
        action: {
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
