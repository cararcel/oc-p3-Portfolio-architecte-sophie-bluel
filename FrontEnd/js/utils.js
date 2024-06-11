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

    try {
        const response = await fetch(`http://localhost:5678/api${path}`, {
            method,
            body,
            headers,
        });

        return response;
    } catch (error) {
        console.error(error);

        return {
            ok: false,
        };
    }
}

async function getWorks() {
    const response = await callAPI('/works');

    if (!response.ok) {
        alert('GetWorks: Une erreur s´est produite.');
        return [];
    }

    return response.json();
}

async function getCategories() {
    const response = await callAPI('/categories');

    if (!response.ok) {
        alert('GetCategories: Une erreur s´est produite.');
        return [];
    }

    return response.json();
}

async function deleteWork(id) {
    const response = await callAPI(`/works/${id}`, 'DELETE');

    if (!response.ok) {
        alert('deleteWork: Une erreur s´est produite.');
        return false;
    }

    return true;
}

async function addWork(formData) {
    const response = await callAPI('/works', 'POST', formData, {});

    if (!response.ok) {
        alert('addWork: Une erreur s´est produite.');
        return false;
    }

    return response.json();
}

export default { callAPI, getWorks, getCategories, deleteWork, addWork };
