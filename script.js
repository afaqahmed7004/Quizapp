//Here linked my all four category links to html buttons
function AiPage() {location.assign("indexAl.html");}
function HrmPage() {location.assign("indexHrm.html");}
function PoaPage() {location.assign("indexPOA.html");}
function WebPage() {location.assign("indexweb.html");}

//Assigning the event listner to user registration
const enterButton = document.querySelector('#enterButton');
var nameInput = document.querySelector('#Nameinput');

enterButton.addEventListener('click', () => {
  if (nameInput.value === '') {
    alert('Please enter your name first !!');
  } else {
    alert( nameInput.value + " " + 'your registration is successful');
  }
});

var nameInput = document.getElementById('Nameinput');
const categoryButtons = document.querySelectorAll('.CatBtn');

categoryButtons.forEach(button => {
button.addEventListener('click', () => {
    if (nameInput.value.trim() === '') {
      alert('First enter your name!!!');
    } else {
      
    }
  });
});







