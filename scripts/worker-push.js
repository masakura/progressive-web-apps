'use strict';

self.addEventListener('push', function(event) {
  console.log('Push message received', event);

  var title = 'Push message';
  event.waitUntil(
    self.registration.showNotification(title, {
      body: 'The Message',
      icon: '../images/icon.png',
      tag: 'my-tag'
    }));
});
