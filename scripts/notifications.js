(function() {
  'use strict';

  var permission = Notification.permission;

  $(document).ready(function() {
    $('#permission').text('[' + permission + ']');
  });

  Notification.requestPermission(function(permission_) {
    permission = permission_;
    $('#permission').text(permission);
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
})();
