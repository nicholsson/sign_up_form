const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const messageContainer = document.querySelector('.message-container');

password.addEventListener('input', ()=>{
    let passwordContent = password.value;
    let confirmPassContent = confirmPassword.value;
    checkPassword(passwordContent, confirmPassContent);
})
confirmPassword.addEventListener('input', ()=>{
    let passwordContent = password.value;
    let confirmPassContent = confirmPassword.value;
    checkPassword(passwordContent, confirmPassContent);
})

function checkPassword(pw1, pw2){
    const existingWarningMessage = document.querySelector('.warning-message');
    if(existingWarningMessage){
        existingWarningMessage.remove();
    }
    if (pw1 !== pw2){
        addWarning();
    }
}

function addWarning(){
    const warningMessage = '*Passwords do not match';
    const message = document.createElement('p');
    message.classList.add('warning-message');
    message.textContent = warningMessage;
    message.style.fontSize = '0.5em';
    message.style.fontWeight = '200';
    message.style.color = 'red';
    messageContainer.appendChild(message);
}