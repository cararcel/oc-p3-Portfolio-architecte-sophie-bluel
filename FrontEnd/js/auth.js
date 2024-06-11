import utils from './utils.js';

function isLoggedIn() {
    return localStorage.getItem('loginToken') !== null;
}

async function login(userData) {
    const response = await utils.callAPI(
        '/users/login',
        'POST',
        JSON.stringify(userData)
    );

    if (!response.ok) {
        const errorMessage = document.querySelector('.login-error');
        errorMessage.innerHTML =
            "Oups ! Un problème est survenu. ! <br> l'utilisateur et/ou le mot de passe sont incorrects !";
        // alert('Échec de la connexion');
        return false;
    }

    const login = await response.json();

    localStorage.setItem('loginToken', login.token);
}

function logout() {
    localStorage.removeItem('loginToken');
}

export default {
    isLoggedIn,
    login,
    logout,
};
