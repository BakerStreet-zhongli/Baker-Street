  const messaging = firebase.messaging();

  if ('serviceWorker' in navigator) {
   navigator.serviceWorker.register('sw.js').then(function(registration) {
    console.log('ServiceWorker registration successful with scope: ', registration.scope);
    messaging.useServiceWorker(registration);
    //try_to_get_token();
    messaging.requestPermission()
     .then(function() {
      console.log('Notification permission granted.');
      try_to_get_token();
     })
     .catch(function(err) {
      console.log('Unable to get permission to notify.', err);
     });
  
   }).catch(function(err) {
    //registration failed :(
    console.log('ServiceWorker registration failed: ', err);
   });
  }
