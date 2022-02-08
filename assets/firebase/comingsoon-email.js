// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyANx1fw1Qm6HXhkfM_IlAYKTIREMvmPqf4",
    authDomain: "glamaryid.firebaseapp.com",
    databaseURL: "https://glamaryid-default-rtdb.firebaseio.com",
    projectId: "glamaryid",
    storageBucket: "glamaryid.appspot.com",
    messagingSenderId: "1043435874641",
    appId: "1:1043435874641:web:de01e1393cd4c7f050cb70",
    measurementId: "G-J1EEDJTZ32",
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('Coming Soon Email');
  
  function reset() {
    document.getElementById("contactForm").reset();
  }
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e) {
    e.preventDefault();
  
    // Get values
    var email = getInputVal('email');
  
    // Save message
    saveMessage(email);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function() {
      document.querySelector('.alert').style.display = 'none';
    }, 5000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id) {
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(email) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      email: email,
    });
  }