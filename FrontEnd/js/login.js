import auth from './auth.js';

const formLogin = document.querySelector('.login-form');

formLogin.addEventListener('submit', async function (event) {
    //to not change URL and recharge page
    event.preventDefault();

    const form = event.target;
    //creation of body to fetch
    const userData = {
        email: form.elements.email.value,
        password: form.elements.password.value,
    };

    await auth.login(userData);
    location.href = 'index.html';
});
