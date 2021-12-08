let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let contact_names_input = id('contact_names_input'),
form = id('form'),
errorMsg = classes('error');


form.addEventListener("submit",(e) =>{
    e.preventDefault();

    engine(contact_names_input, 1, 'Provide your Names.' );
});


let engine = (id, serial, message) => {
    if (id.value.trim() === '') {
        errorMsg[serial].innerHTML = message;
        id.style.border = '2px solid red';
        console.log('error')
    } else {
        errorMsg[serial].innerHTML = '';
        id.style.border = '2px solid green';
    }
}