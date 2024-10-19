import { IcreatePostAuthenticate } from './types';
// test
export const API = import.meta.env.VITE_API_URL



// with port
export const createPostAuthenticate = async (body: IcreatePostAuthenticate) => {
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
