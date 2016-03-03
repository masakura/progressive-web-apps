(function() {
  'use strict';

  navigator.serviceWorker.register('scripts/worker-push.js')
    .then(function(registration) {
      // ウエイト入れないと動かなかった
      setTimeout(function() {
        registration.pushManager.subscribe({
          userVisibleOnly: true
        }).then(function(sub) {
          console.log('endpoint:', sub.endpoint);
        }, 1000);
      });
    });
})();
