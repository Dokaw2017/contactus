var config = {
    apiKey: "AIzaSyCrFAvGGPkMdEQaflF5-k5HfvJV3LRJOks",
    authDomain: "contactform-e0485.firebaseapp.com",
    databaseURL: "https://contactform-e0485.firebaseio.com",
    projectId: "contactform-e0485",
    storageBucket: "contactform-e0485.appspot.com",
    messagingSenderId: "288870221393"
  };
  firebase.initializeApp(config);

  // Reference Messgaes Collection

  var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit',submitForm);


// Submit form
function submitForm(e){
    e.preventDefault();
// Get values

var name = getInputVal('name');
var company = getInputVal('company');
var email = getInputVal('email');
var phone = getInputVal('phone');
var message = getInputVal('message');

// Save message

saveMessage(name,company,email,phone,message);

// Show alert

document.querySelector('.alert').style.display= 'block';

// Hide alert after three second
setTimeout(function(){
    document.querySelector('.alert').style.display= 'none';
},3000);

// Clear form

 document.getElementById('contactForm').reset();
}

// Function to get form values

function getInputVal(id){
    return document.getElementById(id).value;
}

// Function to save the messages to the firebase

function saveMessage(name,company,email,phone,message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}