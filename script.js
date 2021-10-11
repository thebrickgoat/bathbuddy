/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// firebase shiz
const firebaseConfig = {
  apiKey: "AIzaSyCXcLQ0xjxwC48hnoYnt3o3uV0u2sIQApM",
  authDomain: "bath-buddy.firebaseapp.com",
  databaseURL: "https://bath-buddy.firebaseio.com",
  projectId: "bath-buddy",
  storageBucket: "bath-buddy.appspot.com",
  messagingSenderId: "209650832577",
  appId: "1:209650832577:web:fb7936e0be66ec7232b040",
  measurementId: "G-EQBHNDY5T9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//alll the vars
var doc = firebase.firestore();
var db = firebase.database();

var bathtime;
var dbRef =  db.ref('/');
var docRef = doc.collection("isbath").doc("2wMwqTincE8BfCMmhG1k");
var bImage = document.getElementById("bathImageContainer");

var bathImages = [
  //none
  "assets/none.png",
  //justright
  "assets/justright.svg",
  //broke
  "assets/broke.png"
];

var bText = document.getElementById("bathTextContainer");
var bathTextsJustRight = [
  "looks like the bath is going great",
  "all is well in the personal swell",
  "we should all be so lucky as to be in a bath right now"
];

var bathTextsHot = ["looks like this bath is too hot"];
var bathTextsCold = ["this is one chilly bath"];
var bathTextsNone = [
  "sadly, the bath is as empty as our hearts.",
  "the bath is empty, much like our capacity to empthize with other people's lifestyles"
];

//db refactor

window.onload = function() {
dbRef.on("value", function (snap) {

   bathtime = snap.val().isBath; 
   console.log(bathtime);
   switch (bathtime) {
      case "right":
        bImage.data = bathImages[1];
        bText.innerHTML =
          bathTextsJustRight[
            Math.floor(Math.random() * bathTextsJustRight.length)
          ];
        break;
      case "cold":
        break;
      case "hot":
        break;
      case "none":
        bImage.data = bathImages[0];
        bText.innerHTML =
          bathTextsNone[Math.floor(Math.random() * bathTextsNone.length)];
        break;
      default:
        bImage.data = bathImages[2];
        bText.innerHTML =
          "Not only is the bath empty, but it has broken the whole system!";
    }
});};
