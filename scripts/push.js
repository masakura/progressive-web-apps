(function() {
  'use strict';

  navigator.serviceWorker.register('worker-push.js', {
    scope: '/'
  })
    .then(function(registration) {
      console.log(registration);
    });

  navigator.serviceWorker.ready.then(function(registration) {
    console.log("Service Worker Ready");

    registration.pushManager.subscribe({
      userVisibleOnly: true
    }).then(function(sub) {
      console.log('endpoint:', sub.endpoint);
    });
  });
})();
