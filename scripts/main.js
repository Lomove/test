//Делаем смену картинки по тыку
var koshka = document.querySelector('#koshka');

koshka.onclick = function() {
    alert('Ауч! Хватит меня жмякать!');
    var mySrc = koshka.getAttribute('src');
    mySrc;
    if(mySrc === 'images/bmEuphiPTm.jpg') {
      koshka.setAttribute ('src','images/ouhMine2.jpg');
    } else {
      koshka.setAttribute ('src','images/bmEuphiPTm.jpg');
    }
  }

//Делаем кнопочки
var ButtonChangeUser = document.querySelector("#change_user")
var headin1 = document.querySelector("#h1_1")

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  headin1.textContent = 'Ну что, погнали, ' + myName + '!';
  }

if (!localStorage.getItem('name')) {
  setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    headin1.textContent = 'Ну что, погнали, ' + storedName + '!';
  }
ButtonChangeUser.onclick = function() {
  setUserName();
}