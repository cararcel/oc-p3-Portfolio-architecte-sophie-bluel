//Function to call fetch
/**
 *
 * @param {string} path
 * @param {"GET"|"POST"|"PUT"|"DELETE"} method
 * @param {*} body
 */
async function callAPI(
    path,
    method = 'GET',
    body = null,
    headers = { 'Content-Type': 'application/json' }
) {
    const token = localStorage.getItem('loginToken');

    if (token) {
        headers['authorization'] = `Bearer ${token}`;
    }

    return fetch(`http://localhost:5678/api${path}`, {
        method,
        body,
        headers,
    });
}

async function getWorks() {
    const response = await callAPI('/works');
    if (!response.ok) {
        return { error: true, status: response.status };
    }
    return response.json();
}

async function getCategories() {
    const response = await callAPI('/categories');
    if (!response.ok) {
        return { error: true, status: response.status };
    }
    return response.json();
}

export default { callAPI, getWorks, getCategories };
