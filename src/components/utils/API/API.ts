import { IcreatePostAuthenticate } from './types';
// test
export const API = import.meta.env.VITE_API_URL



// Authenticate User
export const createPostAuthenticate = async (body: IcreatePostAuthenticate) => {

    // ------- FOR TEST ------
    if (body.email === 'test@mail.ru' || body.password === 'test') {
        sessionStorage.setItem('access_token', 'test');
        sessionStorage.setItem('refresh_token', 'test');
    }
    // ------- FOR TEST ------

    const res = await fetch(`${import.meta.env.VITE_BASE}/v1/auth/authenticate`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    });
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(res);
}

// Register User
export const createPostRegister = async (body: IcreatePostAuthenticate) => {
    const res = await fetch(`${import.meta.env.VITE_BASE}/v1/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    });
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(res);
}
