function inscription(){
  var home = document.getElementById('home');
  var profile = document.getElementById('profile');
  var signup = document.getElementById('signup');
  var receive = document.getElementById('receive');
  var about = document.getElementById('about');
  if(home.style.display = 'bock'){
    home.style.display = 'none';
    signup.style.display = 'block';
    profile.style.display = 'none';
    receive.style.display = 'none';
    about.style.display = 'none';
  }


}

function apercu(){
  var home = document.getElementById('home');
  var profile = document.getElementById('profile');
  var signup = document.getElementById('signup');
  var receive = document.getElementById('receive');
  var about = document.getElementById('about');
  if(about.style.display = 'none'){
    home.style.display = 'none';
    signup.style.display = 'none';
    profile.style.display = 'none';
    receive.style.display = 'none';
    about.style.display = 'block';
  }


}
function h(){
  var home = document.getElementById('home');
  var profile = document.getElementById('profile');
  var signup = document.getElementById('signup');
  var receive = document.getElementById('receive');
  var about = document.getElementById('about');
  if(home.style.display = 'none'){
    home.style.display = 'block';
    signup.style.display = 'none';
    profile.style.display = 'none';
    receive.style.display = 'none';
    about.style.display = 'none';
  }


}
function profile(){
  var home = document.getElementById('home');
  var profile = document.getElementById('profile');
  var signup = document.getElementById('signup');
  var receive = document.getElementById('receive');
  var about = document.getElementById('about');
  if(profile.style.display = 'none'){
    home.style.display = 'none';
    signup.style.display = 'none';
    profile.style.display = 'block';
    receive.style.display = 'none';
    about.style.display = 'none';
  }


}

setTimeout(() => {
  document.getElementById('splash').classList.toggle('fade');
}, 2000);

//formulaire d'inscription
 // Your web app's Firebase configuration

 var codeV, nameV, emailV, numberV, adressV, infosV;
 setInterval(()=>{

  let date = new Date(),
  hour = date.getHours(),
  min = date.getMinutes(),
  sec = date.getSeconds();

  let d;
  d = hour < 12 ? "AM" : "PM"; //if hour is smaller than 12, than its value will be AM else its value will be pm
  hour = hour > 12 ? hour - 12 : hour; //if hour value is greater than 12 than 12 will subtracted ( by doing this we will get value till 12 not 13,14 or 24 )
  hour = hour == 0 ? hour = 12 : hour; // if hour value is  0 than it value will be 12

  // adding 0 to the front of all the value if they will less than 10
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  

}, 1000); // 1000 milliseconds = 1s
 function enregistrer() {
      nameV = document.getElementById('name').value;
      codeV = document.getElementById('code').value;
      emailV = document.getElementById('email').value;
      numberV = document.getElementById('number').value;
      adressV = document.getElementById('adress').value;
      infosV = document.getElementById('infos').value;
      var home = document.getElementById('home');
      var signup = document.getElementById('signup');
   if(nameV == ""){
     document.getElementById('message').innerHTML ="Votre nom";
     document.getElementById('message').style.color = '#fff';
     document.getElementById('message').style.background ="red";
   }else if (numberV == ""){
     document.getElementById('message').innerHTML ="Votre numero";
   }else if(codeV == ""){
     document.getElementById('message').innerHTML ="Votre code pays";
   }else if(adressV == ""){
    document.getElementById('message').innerHTML ="Votre adresse";
  }else{
     firebase.database().ref('formation/' + nameV).set({
         ANAME:  nameV,
         Email: emailV,
         NUMBER: (codeV) + numberV,
         ADRESSE: adressV,
         INFOS: infosV,
     });
     document.getElementById('message').innerHTML ="Vous etes maimtenant abonnée";
     document.getElementById('message').style.color = '#fff';
     document.getElementById('message').style.background ="blue";
     document.getElementById('name').value = '';
     document.getElementById('email').value = '';
     document.getElementById('number').value = '';
     document.getElementById('adress').value = '';
     document.getElementById('home').style.display ='block';
     document.getElementById('signup').style.display ='none';
   }
  }