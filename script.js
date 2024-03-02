import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js"

document.addEventListener('DOMContentLoaded', function() {
    
  // Import the functions you need from the SDKs you need
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDySNfd5nu3wO1sE0S5yKlqKpHUcobBDzM",
    authDomain: "blazelanding-ac6e3.firebaseapp.com",
    projectId: "blazelanding-ac6e3",
    storageBucket: "blazelanding-ac6e3.appspot.com",
    messagingSenderId: "763754386125",
    appId: "1:763754386125:web:76009847d52a2f15ea0f84",
    measurementId: "G-Y2P8NL0MDK"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


    // Your JavaScript code here
    // Get the modal and video elements
    const modal = document.getElementById('modal');
    const video = document.getElementById('video');

    // Get the buttons that trigger modal and video
    const modalButton = document.getElementById('CTA1');
    const videoButton = document.getElementById('CTA2');

    // Function to show modal
    function showModal() {
        modal.style.display = 'block';
    }


    function sendEmailToServer(email) {
        const db = getFirestore(app);
        const emailRef = doc(db, "emails", email);
    
        setDoc(emailRef, { email: email })
            .then(() => {
                console.log("Email written: ", email);
            })
            .catch((error) => {
                console.error("Error writing email: ", error);
            });
    }

    document.getElementById('emailForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        console.log("Email submitted: ");

        var email = document.getElementById('emailInput').value;
        // Get the entered email address
        var modalContent = document.getElementById('modal-content');
        var top_tag = document.getElementById("top_tag");
        modalContent.innerHTML = "<span class='close'>&times;</span><h2>You're on the Waiting List!</h2><p>Thanks for signing up, we'll send you an email when we launch!</p>";        
        top_tag.innerHTML = "Thanks for signing up, we'll send you an email when we launch!";
        sendEmailToServer(email);
        // Update the modal content with the email message
       
    });

    document.getElementById('emailForm2').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        console.log("Email submitted2: ");

        var email = document.getElementById('emailInput2').value;
        // Get the entered email address
        var modalContent = document.getElementById('modal-content2');
        modalContent.innerHTML = "<span class='close'>&times;</span><h2>You're on the Waiting List!</h2><p>Thanks for signing up, we'll send you an email when we launch!</p>";        
        sendEmailToServer(email);
        // Update the modal content with the email message
       
    });

    // Event listener for modal button click
    modalButton.addEventListener('click', showModal);

    // Close modal when the close button is clicked
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('close')) {
            modal.style.display = 'none';
        }
    });

    // Close modal when the user clicks anywhere outside of the modal
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });


});
