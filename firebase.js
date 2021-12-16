console.log("Initializing firebase");

const firebaseConfig = {
    apiKey: "AIzaSyDJ9D-YEpxmEnBZck-u1M6QOdfZNNvQTZs",
    authDomain: "atlp-capstone-project-b6159.firebaseapp.com",
    projectId: "atlp-capstone-project-b6159",
    storageBucket: "atlp-capstone-project-b6159.appspot.com",
    messagingSenderId: "1042536780820",
    appId: "1:1042536780820:web:6c265cd2a51f99f41ac301"

  };
 

  const app = firebase.initializeApp(firebaseConfig);
  const db = app.database();
//   console.log(app.name);

const auth = firebase.auth();
	
	
function signUp(){
    
    const email = document.getElementById("signup_email_input");
    const password = document.getElementById("signup_password_input");
    
    
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    
    alert("Signed Up");
}
