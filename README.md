# Progressive Web Apps

## 参考資料
* [MDN Notification](https://developer.mozilla.org/ja/docs/Web/API/notification)
  - 実際に動く
  - CODEPEN/JSFiddle のサンプルあり
* [MDN ServiceWorkerRegistration.showNotification()](https://developer.mozilla.org/ja/docs/Web/API/ServiceWorkerRegistration/showNotification)
  - ServiceWorker 経由での Notification
* [MDN Push API](https://developer.mozilla.org/ja/docs/Web/API/Push_API)
  - 関連情報にデモあり
* [初めてのService Worker （Push API編）](http://qiita.com/k-taro/items/26dc55281d414babd495)
* [ChromeでW3C Push APIを使ってみた](http://qiita.com/tomoyukilabs/items/8fffb4280c1914b6aa3d)


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
