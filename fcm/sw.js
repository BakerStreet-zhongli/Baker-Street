// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup
importScripts('https://www.gstatic.com/firebasejs/4.5.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.5.2/firebase-messaging.js');
importScripts('https://www.gstatic.com/firebasejs/4.5.2/firebase.js');

// Initialize Firebase
var config = {
  apiKey: "AIzaSyC0NErTiKdRXoWKSv-FMXe4zOSC8kr6N7s",
  authDomain: "dynamic-links-7ff15.firebaseapp.com",
  databaseURL: "https://dynamic-links-7ff15.firebaseio.com",
  projectId: "dynamic-links-7ff15",
  storageBucket: "dynamic-links-7ff15.appspot.com",
  messagingSenderId: "331262080043",
  appId: "1:331262080043:web:df9a87d377b1d1c21ae66e"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();

// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// [START background_handler]
messaging.setBackgroundMessageHandler(function (payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});
// [END background_handler]