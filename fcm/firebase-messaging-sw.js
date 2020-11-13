// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyC0NErTiKdRXoWKSv-FMXe4zOSC8kr6N7s",
    authDomain: "dynamic-links-7ff15.firebaseapp.com",
    databaseURL: "https://dynamic-links-7ff15.firebaseio.com",
    projectId: "dynamic-links-7ff15",
    storageBucket: "dynamic-links-7ff15.appspot.com",
    messagingSenderId: "331262080043",
    appId: "1:331262080043:web:df9a87d377b1d1c21ae66e"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();