# Progressive Web Apps

https://masakura.github.io/progressive-web-apps/

## 使い方

```
$ git clone ...
$ cd progressive-web-apps
$ npm install
$ npm start
```

`npm run deploy` で GitHub Pages にデプロイします。


## 説明
### Progressive Web Apps
[What is a Progressive Web App?](https://developers.google.com/web/progressive-web-apps#learnmore) とか。

> Progressive Web Apps are experiences that combine the best of the web and the best of apps.

`Progressive Web Apps` は、ウェブとアプリのいいところを組み合わせたアプリである。


### Service Workers
以下を目的にした Worker。

* オフラインアプリ
* バックグラウンド動作

機能的にはこんな感じ。

* `XmlHTTPRequest` に代わる `Fetch API` (これは Service Workers でなくても使えます)
* リクエストのフック
* キャッシュをするためのストレージ
* ブラウザーを終了しても動作するバックグラウンド機能

リクエストのフックができるため、キャッシュにあったらキャッシュを返すのような処理がかなり細かく JavaScript で制御できる。また、`http://example.com/hoge.jpg` にアクセスするときに、端末の解像度に合わせて、Retina なら高解像度版 (`http://example.com/hoge.large.jpg`) にアクセスさせるなんてこともできる。

Service Workers は SSL じゃないと基本動かない。

https://www.w3.org/TR/service-workers/


### Web Notifications
通知ウインドウを出すための API。通知ウインドウを出すだけなのでとても試しやすい。バイブレーションができたりするみたい。

https://www.w3.org/TR/notifications/


### Web App Manifest
ウェブアプリをプリカするためのマニフェストファイル。

```json
{
  "lang": "ja",
  "name": "Progressive Web Apps",
  "short_name": "progre",
  "icons": [{
    "src": "images/icon.png",
    "sizes": "144x144",
    "type": "image/png"
  }],
  "start_url": "https://masakura.github.io/progressive-web-apps/",
}
```

こんな感じに書いておくと、Google Chrome の`ホーム画面に追加`をカスタマイズできる。アイコン画像・アプリの名前・起動した時に表示するページのアドレスを設定できる。

いくつかの条件を満たせば、インストールするかを聞いてくる。

https://developers.google.com/web/updates/2015/03/increasing-engagement-with-app-install-banners-in-chrome-for-android

https://www.w3.org/TR/appmanifest/


## 参考資料
* [Push Notifications on the Open Web](https://developers.google.com/web/updates/2015/03/push-notifications-on-the-open-web)
  - [Your first push notifications web app](https://developers.google.com/web/fundamentals/getting-started/push-notifications/?hl=en)
  - 英語だけどわかりやすかった
* [MDN Notification](https://developer.mozilla.org/ja/docs/Web/API/notification)
  - 実際に動く
  - CODEPEN/JSFiddle のサンプルあり
* [MDN ServiceWorkerRegistration.showNotification()](https://developer.mozilla.org/ja/docs/Web/API/ServiceWorkerRegistration/showNotification)
  - ServiceWorker 経由での Notification
* [MDN Push API](https://developer.mozilla.org/ja/docs/Web/API/Push_API)
  - 関連情報にデモあり
* [初めてのService Worker （Push API編）](http://qiita.com/k-taro/items/26dc55281d414babd495)
* [ChromeでW3C Push APIを使ってみた](http://qiita.com/tomoyukilabs/items/8fffb4280c1914b6aa3d)

他は試していないけど、Google Chrome では、Service Worker の登録直後に Push API の登録をするとうまくいかなかった。

```javascript
if ('serviceWorker' in navigator) {
    console.log('Service Worker is supported');
    navigator.serviceWorker.register('sw.js').then(function(reg) {
        console.log(':^)', reg);
        setTimeout(function() {
            reg.pushManager.subscribe({
                userVisibleOnly: true
            }).then(function(sub) {
                console.log('endpoint:', sub.endpoint);
            }, 1000);
        });
    }).catch(function(error) {
        console.log(':^(', error);
    });
}
```


## メモ
* Chrome for Android は `new Notification()` が動かない
* Firefox for Android は `new Notification()` は HTTPS のみ?
* `showNotification()` でのクリックされたらがよくわからない
  - ブラウザーを開くとかどうするんだろう?
* Chrome/Firefox for Android は `showNotification()' で HTTPS なら動く
* バイブレーションが動作しないような...
* ServiceWorker には XMLHttpRequest はない
  - ServiceWorker で WebSocket が動かないような気がする
  - なので、Milkcocoa も動かない
* Push API 使わないと、ブラウザー落としてても実行は難しそう
