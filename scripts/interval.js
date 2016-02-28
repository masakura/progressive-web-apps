(function() {
  'use strict';

  // Notifications API の許可
  Notification.requestPermission(function() {
  });

  // ServiceWorker の登録
  navigator.serviceWorker.register('scripts/worker-interval.js');
})();
