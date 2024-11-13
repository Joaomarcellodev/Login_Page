const email = document.getElementById('login-email');

email.addEventListener('change', () => {
    if (!validarEmail(email.value)) {
        email.style.outline = '2px solid #ff6666';
    } else {
        email.style.outline = '2px solid #66ff66';
    }
});

function validarEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}