(function() {
  'use strict';

  var milkcocoa = new MilkCocoa('hotif8ab67j.mlkcca.com');
  var datastore = milkcocoa.dataStore('nise/' + location.hash);

  var permission = Notification.permission;

  $(document).ready(function() {
    $('#permission').text('[' + permission + ']');
  });

  Notification.requestPermission(function(permission_) {
    permission = permission_;
    $('#permission').text(permission);
  });

  datastore.on('send', function(data) {
    console.log(data);
  });
})();
