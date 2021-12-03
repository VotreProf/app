function myFunction() {
  var x = document.getElementById("write");
  var y = document.getElementById("read");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "block";
    y.style.display = "none";
  }
  } 

  function hide() {
      var x = document.getElementById("write");
      var y = document.getElementById("read");
      if (y.style.display === "none") {
        y.style.display = "block";
        x.style.display = "none";
      } else {
        y.style.display = "block";
        x.style.display = "none";
      }
      }

  

var codeV, nameV, emailV, numberV, passV;

function insert() {
  codeV = document.getElementById('code').value;
   nameV = document.getElementById('name').value;
   emailV = document.getElementById('email').value;
   numberV = document.getElementById('number').value;
   passV = document.getElementById('pass').value;
   var bonus = 100;
   var i = 0;
   if(codeV.length >= 8){
    if (i == 0) {
      i = 1;
      var elem = document.getElementById("myBar");
      var width = 1;
      var id = setInterval(frame, 10);
      function frame() {
      if (width >= 100) {
        firebase.database().ref(codeV).set({
          CODE: codeV,
          NAME: nameV,
          Mail: emailV,
          NUMBER: numberV,
          PASSWORD: passV,
          BALANCE: bonus,
        })
        window.location.assign("/./shope/newshop.html");
        document.getElementById('msg').innerHTML = "vous avez creer votre compte avec succès";
        document.getElementById('codeV').value = "";
      clearInterval(id);
      i = 0;
      } else {
      width++;
      elem.style.width = width + "%";
      }
      }
      }
   
   }else{
    document.getElementById('msg').innerHTML = "Une erreur s'est produit, reverifier le formulaire"; 
   }
}

function Ready(){
  codeV = document.getElementById('code').value;
  nameV = document.getElementById('name').value;
  emailV = document.getElementById('email').value;
  numberV = document.getElementById('number').value;
  montantV = document.getElementById('montant').value;
  passwordV = document.getElementById('password').value;
}

  document.getElementById('show').onclick = function(){
   Ready();
   firebase.database().ref('numberV').on('value',function(snapshot){
       document.getElementById('email').value= snapshot.val().Mail;
       document.getElementById('number').value= snapshot.val().DOWNLINE;
       document.getElementById('montant').value= snapshot.val().BALANCE;
       document.getElementById('password').value= snapshot.val().PASSWORD;
   });
}


function getdata() {
  var codep=document.getElementById("codep").value;
  //firebase data retrieval function
  //path of your data
  //.once will get all your data in one time
  firebase.database().ref(codep).once('value').then(function (snapshot) {
      //here we will get data
      //enter your field name
      var namep=snapshot.val().NAME;
      var emailp=snapshot.val().Mail;
      var numberp=snapshot.val().DOWNLINE;
      var montantp=snapshot.val().BALANCE;
      var passwordp=snapshot.val().PASSWORD;

      //now we have data in variables
      //now show them in our html

      document.getElementById("namep").innerHTML=namep;
      document.getElementById("emailp").innerHTML=emailp;
      document.getElementById("numberp").innerHTML=numberp;
      document.getElementById("montantp").innerHTML=montantp;
      document.getElementById("password").innerHTML=passwordp;
  })
}



