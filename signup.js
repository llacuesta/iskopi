const form = document.getElementById('form');

const user = document.getElementById('username');
const email = document.getElementById('email');
const pass = document.getElementById('pass');
const pass2 = document.getElementById('re-pass');


form.addEventListener('submit', (e) =>{
    e.preventDefault();

    validation();
});

//pre validation
email.addEventListener('keyup',(e)=>{
    let emailValue = email.value.trim();

    if(emailValue === ""){
        showError(email, 'Email cannot be empty');
    }else if(!emailValid(emailValue)){
        showError(email, 'Email is invalid');
    }else{
        showSuccess(email);
    }
});

user.addEventListener('keyup',(e) =>{
    let userValue = user.value.trim();

    if(userValue === ""){
        //show error
        // add error class
        showError(user,'Username cannot be blank');
    }else{
        // add success
        showSuccess(user);
    } 
});

pass.addEventListener('keyup', (e)=>{
    let passValue = pass.value.trim();

    if(passValue === ""){
        showError(pass,'Password cannot be blank');
    }else if(passValue.length < 8){
        showError(pass,'Your password must be at least 8 characters');
    }else if(!passValid(passValue)){
        showError(pass,'Your password should contain at least 1 special character');
    }else{
        showSuccess(pass);
    }
})

pass2.addEventListener('keyup',(e)=>{
    let pass2Value = pass2.value.trim();
    let passText = e.target.value;
    let passValue = pass.value.trim();


    Array.from(passValue).forEach(function(text){
        if(passValue.indexOf(passText) !=-1){
            showError(pass2, 'Password does not match')
        }
    })

    if(pass2Value === ""){
        showError(pass2, 'Please confirm password');
    }else if(pass2Value!=passValue){
        showError(pass2, 'Password does not match')
    }else{
        showSuccess(pass2);
    }
});


//post validation
function validation(){
    //input values
    //.trim() - eliminate white spaces
    let userValue = user.value.trim();
    let emailValue = email.value.trim();
    let passValue = pass.value.trim();
    let pass2Value = pass2.value.trim();

    if(userValue === ""){
        //show error
        // add error class
        showError(user,'Username cannot be blank');
    }else{
        // add success
        showSuccess(user);
    }

    if(emailValue === ""){
        showError(email, 'Email cannot be empty');
    }else if(!emailValid(emailValue)){
        showError(email, 'Email is invalid');
    }else{
        showSuccess(email);
    }

    if(passValue === ""){
        showError(pass,'Password cannot be blank');
    }else if(passValue.length < 8){
        showError(pass,'Your password must be at least 8 characters');
    }else if(!passValid(passValue)){
        showError(pass,'Your password should contain at least 1 special character');
    }else{
        showSuccess(pass);
    }

    if(pass2Value === ""){
        showError(pass2, 'Please confirm password');
    }else if(pass2Value!=passValue){
        showError(pass2, 'Password does not match')
    }else{
        showSuccess(pass2);
    }

}

function showError(input,prompt){
    let inputControl = input.parentElement; //input-control
    let small = inputControl.children[4];

    inputControl.className = 'input-control error';

    small.innerText = prompt;
    
}

function showSuccess(input){
    let inputControl = input.parentElement; //input-control
    inputControl.className = 'input-control success';
}

function emailValid(email){
    return  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email);
  
}

function passValid(password){
    return /(?=.*[!@#$%^&*])/.test(password);
}

//button functionalities
