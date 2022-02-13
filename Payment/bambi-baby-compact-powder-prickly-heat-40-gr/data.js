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
var messagesRef = firebase.database().ref('Bambi Baby Powder Compact Prickly Heat 40gr ( PAYMENT )');

function reset() {
  document.getElementById("payment").reset();
}

// Listen for form submit
document.getElementById('payment').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var First_name = getInputVal('First_name');
  var Last_name = getInputVal('Last_name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var Provinsi = getInputVal('Provinsi');
  var Kota = getInputVal('Kota');
  var Kecamatan = getInputVal('Kecamatan');
  var sebagai = getInputVal('sebagai');
  var zip = getInputVal('zip');
  var note = getInputVal('note');
  var Voucher = getInputVal('Voucher');

  // Save message
  saveMessage(First_name, Last_name, email, phone, Provinsi, Kota, Kecamatan, sebagai, zip, note, Voucher);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  }, 5000);

  // Clear form
  document.getElementById('payment').reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(First_name, Last_name, email, phone, Provinsi, Kota, Kecamatan, sebagai, zip, note, Voucher) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    First_name: First_name,
    Last_name: Last_name,
    email: email,
    phone: phone,
    Provinsi: Provinsi,
    Kota: Kota,
    Kecamatan: Kecamatan,
    sebagai: sebagai,
    zip: zip,
    note: note,
    Voucher: Voucher,
  });
}