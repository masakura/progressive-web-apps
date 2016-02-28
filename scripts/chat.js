(function() {
  'use strict';

  var milkcocoa = new MilkCocoa('hotif8ab67j.mlkcca.com');
  var datastore = milkcocoa.dataStore('nise/' + location.hash);

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
  navigator.serviceWorker.register('scripts/worker-chat.js')
    .then(function(registration_) {
      registration = registration_;
    });

  datastore.on('send', function(data) {
    var text = data.value.text;

    $('<li class="list-group-item"></li>')
      .text(text)
      .prependTo('#messages');

    if (permission === 'granted') {
      registration.showNotification('通知', {
        body: text,
        icon: 'images/icon.png',
        vibrate: [300, 100, 300, 100, 300]
      });
    }
  });

  $(document).on('click', '#send', function() {
    var text = $('#input').val();
    $('#input').val('');

    datastore.send({
      text: text
    });
  });
})();
