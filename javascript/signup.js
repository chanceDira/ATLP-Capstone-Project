const form = document.getElementById('form_signup');
const names = document.getElementById('signup_names_input');
const email = document.getElementById('signup_email_input');
const password = document.getElementById('signup_password_input');

    
    
    
     form.addEventListener("submit",(e) =>{
         e.preventDefault();

         validateInputs();
     });
     
     const setError = (element, message) =>{
         const inputControl = element.parentElement;
         const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success');

    }
    const setSuccess = element =>{
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');
        
        errorDisplay.innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error');

    }

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

    const validateInputs = () =>{
        console.log(password.value);
        const namesValue = names.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();

        //names
        if(namesValue === ''){
            setError(names, 'username is required');
        }
        else{
             setSuccess(names);
        }
        //email
        if(emailValue === ''){
            setError(email, 'Email is required');
        }
        else if(!isValidEmail(emailValue)){
            setError(email, 'Enter valid Email');
        }
        else{
            setSuccess(email);
        }
        //password
        if(passwordValue === ''){
            setError(password, 'Password is required');
        }
        else if(password.length <8){
            setError(password, 'Password must be at least 8 character');
        }
        else{
            setSuccess(password);
        }
  
    };