var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/myimage.png') {
      myImage.setAttribute ('src','images/myimage1.png');
    } else {
      myImage.setAttribute ('src','images/myimage.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Welcome to Pikachu World, ' + myName;
  }
}

myButton.onclick = function() {
   setUserName();
}


var TouchButton = document.querySelector("button2"); 

 TouchButton.onclick = function() {
    alert('Ouch! Stop poking me!');
}