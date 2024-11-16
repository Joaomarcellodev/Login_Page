const email = document.getElementById('email-login');
const blurCadasterBtn = document.getElementById('blur-cadaster-btn');
const blurLoginBtn = document.getElementById('blur-login-btn');
const containerLogin = document.getElementById('container-left');
const containerCadaster = document.getElementById('container-right');

blurCadasterBtn.addEventListener('click', () => {
    containerLogin.classList.remove('blur-container');
    containerLogin.classList.add('onblur-container');    
    containerCadaster.classList.remove('onblur-container');
    containerCadaster.classList.add('blur-container');
});

blurLoginBtn.addEventListener('click', () => {
    containerLogin.classList.remove('onblur-container');
    containerLogin.classList.add('blur-container');
    containerCadaster.classList.remove('blur-container');
    containerCadaster.classList.add('onblur-container');
});

email.addEventListener('change', () => {
    if (!validarEmail(email.value)) {
        email.style.outline = '2px solid #ff6666';
        email.classList.add('animated', 'shake');
    } else {
        email.style.outline = '2px solid transparent';
    }
});

function validarEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}