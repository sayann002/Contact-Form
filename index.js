var firebaseConfig = {
  apiKey: "AIzaSyDj0sRT0oWphpjU-OVsO0ifbFJ_1ue6UkM",
  authDomain: "contactform-6fc3f.firebaseapp.com",
  databaseURL: "https://contactform-6fc3f-default-rtdb.firebaseio.com",
  projectId: "contactform-6fc3f",
  storageBucket: "contactform-6fc3f.appspot.com",
  messagingSenderId: "594580258785",
  appId: "1:594580258785:web:ee10cf1fc2810060495ca0",
  measurementId: "G-4SMT208L7L",
};
firebase.initializeApp(firebaseConfig);
//firebase.analytics();
// Reference messages collection
let messagesRef = firebase.database().ref("messages");

// Submit Form
const submitForm = (e) => {
  e.preventDefault();
  let name = getInputValue("name");
  let company = getInputValue("company");
  let email = getInputValue("email");
  let phone = getInputValue("phone");
  let message = getInputValue("message");

  // Save Message
  saveMessage(name, company, email, phone, message);
  // Show alert
  document.querySelector(".alert").style.display = "block";
  // Hide alert after 2 sec
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 2000);
  // Clear Form
  document.getElementById("contactForm").reset();
};
// Listen for form submit
document.getElementById("contactForm").addEventListener("submit", submitForm);

// Function to get form values
const getInputValue = (id) => {
  return document.getElementById(id).value;
};

// Save message to firebase
const saveMessage = (name, company, email, phone, message) => {
  let newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message,
  });
};
