    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyCTgqtMVnMcOqcQ7pDqoUA-F_kR-KlSqfg",
        authDomain: "paimente-bb7cc.firebaseapp.com",
        databaseURL: "https://paimente-bb7cc-default-rtdb.firebaseio.com",
        projectId: "paimente-bb7cc",
        storageBucket: "paimente-bb7cc.appspot.com",
        messagingSenderId: "772305114013",
        appId: "1:772305114013:web:73485cfdbb0d2eb3d91574",
        measurementId: "G-BXF8NJ7L8Q"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      
      // Database reference 
      var numberV, montantV, prix;
      
      function Ready(){
      numberV = document.getElementById('number').value;
      montantV = document.getElementById('montant').value;
      var p=document.getElementById('p');
      }
      //...........................select data.........................
      document.getElementById('select').onclick = function(){
      if(numberV ==""){
      document.getElementById('msg').innerHTML="Veuillez entrer votre pin";
      }else{
      
      Ready();
      firebase.database().ref(numberV).on('value',function(snapshot){;
      document.getElementById('montant').value= snapshot.val().BALANCE;
      document.getElementById('msg').innerHTML="Cliquer sur le boutton pour payer";
      document.getElementById('p').style.display='block';
      document.getElementById('b').style.display='none';
    //   document.getElementById("select").disabled = true;
    //   document.getElementById("insert").disabled = false;
  
      });
      }
      }
      
      document.getElementById('payer').addEventListener('click', function(){
      numberV = document.getElementById('number').value;
      montantV = document.getElementById('montant').value;
      var lien=document.getElementById('lien');
      var prix = document.getElementById('prix').value;
      var price = 260;
      var i = 0;
      if(montantV > prix){
        firebase.database().ref(numberV).update({
        NUMBER: numberV,
        BALANCE: montantV - prix,
      })
      if (i == 0) {
          i = 1;
          var elem = document.getElementById("myBar");
          var width = 1;
          var id = setInterval(frame, 10);
          function frame() {
          if (width >= 100) {
          clearInterval(id);
          document.getElementById('montant').value = '';
          document.getElementById('number').value = '';
          window.location = lien;
          i = 0;
          } else {
          width++;
          elem.style.width = width + "%";
          }
          }
          }
      } else{
        document.getElementById('msg').innerHTML = "Vous n'avez pas assez de Rm"; 
      
      }
      
      });
      // The click Event


      function openForm() {
        document.getElementById("form").style.display = "block";
      }
      
      
      function closeForm() {
        document.getElementById("form").style.display = "none";
      }
    