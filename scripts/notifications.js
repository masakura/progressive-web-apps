(function() {
  'use strict';

  var permission = Notification.permission;

  $(document).ready(function() {
    $('#permission').text('[' + permission + ']');
  });

  // Notifications API の許可
  Notification.requestPermission(function(permission_) {
    permission = permission_;
    $('#permission').text(permission);
  });

  // ServiceWorker の登録
  var registration;
  navigator.serviceWorker.register('scripts/worker.js')
    .then(function(registration_) {
      registration = registration_;
    });

  $(document).on('click', '#notify', function() {
    if (permission === 'granted') {
      var notification = new Notification('通知', {
        body: 'メールが来てません!',
        icon: 'images/icon.png',
        vibrate: [300, 100, 300, 100, 300]
      });
      notification.onclick = function() {
        notification.close();
        window.open(window.location, '_blank');
      };
    }
  });

  $(document).on('click', '#notify-serviceworker', function() {
    if (permission === 'granted') {
      var notification = registration.showNotification('通知', {
        body: 'メールが来てません! (ServiceWorker 経由)',
        icon: 'images/icon.png',
        vibrate: [300, 100, 300, 100, 300]
      });
      notification.onclick = function() {
        notification.close();
        window.open(window.location, '_blank');
      };
    }
  });
})();
