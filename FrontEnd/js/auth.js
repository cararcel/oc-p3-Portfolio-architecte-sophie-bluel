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
        alert('Échec de la connexion');
        return;
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
