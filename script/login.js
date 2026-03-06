
// global variable

const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', () => {

    if (usernameInput.value !== 'admin') {
        alert('invalid username');
        return;
    } else if (passwordInput.value !== 'admin123') {
        alert('invalid password');
        return;
    } else {
        alert('Login Sessusfull');
        location.assign('main.html');
    }
});
