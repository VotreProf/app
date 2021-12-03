//........  crack mot de pass windows.....................
function acheterPass() {
  var passWindows = document.getElementById("passWindows");
  var formPass = document.getElementById('formPass');
  if (passWindows.style.display === "block") {
    formPass.style.display = "block";
    passWindows.style.display = "none";
  } else {
    formPass.style.display = "block";
    passWindows.style.display = "none";
  }
}

// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});

var codeV, nameV, emailV, numberV, montantV, passwordV;

function insert() {
     nameV = document.getElementById('name').value;
     emailV = document.getElementById('email').value;
     numberV = document.getElementById('number').value;
     montantV = document.getElementById('docs').value;
     var i = 0;
     
    firebase.database().ref(codeV).set({
        CODE: codeV,
        NAME: nameV,
        Mail: emailV,
        NUMBER: numberV,
        BALANCE: montantV,
    });

 }
