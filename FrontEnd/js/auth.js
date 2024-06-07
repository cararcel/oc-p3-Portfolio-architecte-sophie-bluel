import utils from './utils.js';

function isLoggedIn() {
    return localStorage.getItem('loginToken') !== null;
}

async function login(userData) {
    const login = await utils.callAPI(
        '/users/login',
        'POST',
        JSON.stringify(userData)
    );

    if (login.error) {
        alert('Échec de la connexion');
        return;
    }

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
