var firebaseConfig = {
    apiKey: "AIzaSyAwnrdMHIkFmAPHHOJhWRL-Tz0hSniCGcY",
    authDomain: "votreprof-e3009.firebaseapp.com",
    databaseURL: "https://votreprof-e3009-default-rtdb.firebaseio.com",
    projectId: "votreprof-e3009",
    storageBucket: "votreprof-e3009.appspot.com",
    messagingSenderId: "1044359996340",
    appId: "1:1044359996340:web:179fc5a911ef0d9a71c8e1",
    measurementId: "G-LGH5WBR6G7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function readFom() {
    lnameV = document.getElementById("lname").value;
    nameV = document.getElementById("name").value;
    emailV = document.getElementById("email").value;
    numberV = document.getElementById("number").value;
    dateV = document.getElementById('date');
    console.log(nameV, lnameV, emailV, numberV, dateV);
  }
   
  document.getElementById("read").onclick = function () {
    readFom();
  
    firebase
      .database()
      .ref("Formation html&css/" + nameV)
      .on("value", function (snap) {
        document.getElementById("lname").innerHTML = snap.val().ANAME;
        document.getElementById("email").innerHTML = snap.val().Email;
        document.getElementById("number").innerHTML = snap.val().NUMBER;
        document.getElementById("date").innerHTML = snap.val().DATE;
        document.getElementById("sexe").innerHTML = snap.val().SEXE;
        document.getElementById('module').style.display = 'block';
      });
  };
