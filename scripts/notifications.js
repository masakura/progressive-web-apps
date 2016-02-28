(function() {
  'use strict';

  Notification.requestPermission(function() {
  });

  $(document).on('click', '#notify', function() {
    if (Notification.permission === 'granted') {
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
})();
