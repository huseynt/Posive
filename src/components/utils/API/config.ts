// import staticToken from './token';

function getCookie(name: string) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        const result = parts.pop();
        if (result) {
            return result.split(';').shift();
        }
    }
}

const cookieToken = getCookie('token');
if (!cookieToken) {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 30);
    document.cookie = `token=${import.meta.env.VITE_API_KEY}; expires=${expirationDate.toUTCString()}`;
}


export const config = {
    headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${cookieToken ? cookieToken : import.meta.env.VITE_API_KEY}`,
    }
}
