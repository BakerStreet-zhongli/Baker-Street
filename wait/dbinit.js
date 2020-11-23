// Initialize Firebase
var config = {
    apiKey: "AIzaSyBSUa0dCvm8sr6FCDpan0lFyF82CJyByMU",
    authDomain: "research-8ca6f.firebaseapp.com",
    databaseURL: "https://research-8ca6f.firebaseio.com",
    storageBucket: "research-8ca6f.appspot.com",
    messagingSenderId: "387566171434"
};
firebase.initializeApp(config);
var database = firebase.database();
var ui = new firebaseui.auth.AuthUI(firebase.auth());

// let pw = prompt('請輸入密碼');