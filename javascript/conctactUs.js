console.log("Initializing firebase");

const firebaseConfig = {
    apiKey: "AIzaSyDJ9D-YEpxmEnBZck-u1M6QOdfZNNvQTZs",
    authDomain: "atlp-capstone-project-b6159.firebaseapp.com",
    projectId: "atlp-capstone-project-b6159",
    storageBucket: "atlp-capstone-project-b6159.appspot.com",
    messagingSenderId: "1042536780820",
    appId: "1:1042536780820:web:6c265cd2a51f99f41ac301"

  };
 

  firebase.initializeApp(firebaseConfig);
//   const db = firebase.database();



//=============================================================================
// let id = (id) => document.getElementById(id);
// let classes = (classes) => document.getElementsByClassName(classes);

// let contact_names_input = id('contact_names_input'),
// form = id('form'),
// errorMsg = classes('error');


// form.addEventListener("submit",(e) =>{
//     e.preventDefault();

//     engine(contact_names_input, 1, 'Provide your Names.' );
// });


// let engine = (id, serial, message) => {
//     if (id.value.trim() === '') {
//         errorMsg[serial].innerHTML = message;
//         id.style.border = '2px solid red';
//         console.log('error')
//     } else {
//         errorMsg[serial].innerHTML = '';
//         id.style.border = '2px solid green';
//     }
// }
//============================================================================= 

// const sendMessage = () => {
//     const names = document.getElementById("contact_names_input").value;
//     const email = document.getElementById("contact_email_input").value;
//     const comment = document.getElementById("contact_comment_input").value;

//     firebase.database().ref("contacts/").set(
//             {
//               names: names,
//               email: email,
//               comment: comment,
//             })
             
//     alert("Message sent !!")
// }

const btnContact = document.getElementById("btn_contact")
const names = document.getElementById("contact_names_input");
const email = document.getElementById("contact_email_input");
const comment = document.getElementById("contact_comment_input");
const emailNewsletter = document.getElementById("user_email_newsletter")
const btnNewsletter = document.getElementById("btn_submit_newletter");

btnContact.addEventListener('click', (e) => {
  e.preventDefault()
  console.log("Values: ", names.value, email.value, comment.value)
  firebase.database().ref("contacts/").push().set(
    {
      names: names.value,
      email: email.value,
      comment: comment.value
    }).then(() => {
      console.log("Success")
      // alert("Message sent !!")
      Toastify({
        text: "Message sent !!",
        className: "info",
        style: {
          // background: "linear-gradient(to right, #00b09b, #96c93d)",
          background: "#d81515",
          
        }
      }).showToast();
    })
     
// alert("Message sent !!")

})



btnNewsletter.addEventListener('click', (e) => {
  e.preventDefault()
    firebase.database().ref('newsletter-emails/').push().set({
      emailNewsletter: emailNewsletter.value
    }).then(() => {
      alert("Thank you for your interest, you will be receiving my blogs !!")
    })
})