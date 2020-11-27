// Initialize Firebase
var config = {
    apiKey: "AIzaSyBSUa0dCvm8sr6FCDpan0lFyF82CJyByMU",
    authDomain: "bakerstreet-zhongli.github.io",
    databaseURL: "https://research-8ca6f.firebaseio.com",
    storageBucket: "research-8ca6f.appspot.com",
    messagingSenderId: "387566171434"
};
firebase.initializeApp(config);
var database = firebase.database();
// let pw = prompt('請輸入密碼');