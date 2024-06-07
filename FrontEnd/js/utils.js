/**
 * Function to call fetch
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

    const response = await fetch(`http://localhost:5678/api${path}`, {
        method,
        body,
        headers,
    });

    try {
        const data = await response.json();

        if (!response.ok) {
            return { error: true, status: response.status };
        }

        return data;
    } catch (ignore) {}
}

export default { callAPI };
