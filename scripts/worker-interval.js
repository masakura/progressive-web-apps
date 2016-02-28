'use strict';

var count = 0;
var timerId = setInterval(function() {
  count++;
  self.registration.showNotification('Hi! ' + count);

  if (count >= 5) {
    clearInterval(timerId);
  }
}, 5000);
