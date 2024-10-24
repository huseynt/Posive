import { getToken } from '../reUse/getToken';
import { IcreatePostAuthenticate, IVerifyEmail, IChangePassword } from './types';

// test
export const API = import.meta.env.VITE_API_URL

export const base = import.meta.env.VITE_BASE


// Authenticate User
export const createPostAuthenticate = async (body: IcreatePostAuthenticate) => {
    // ------- FOR TEST ------
    if (body.email === 'test@mail.ru' || body.password === 'test') {
        sessionStorage.setItem('access_token', 'test');
        sessionStorage.setItem('refresh_token', 'test');
    }
    // ------- FOR TEST ------
    const res = await fetch(`${base}/v1/auth/authenticate`, {
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
    const res = await fetch(`${base}/v1/auth/register`, {
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







// Reset Password
export const createResetPassword = async (email: string) => {
    const res = await fetch(`${base}/mail/verifyEmail?email=${email}`, {
        method: 'GET',
        // headers: {
        //     'Content-Type': 'application/json',
        // }
    });
    if (res.ok) {
        return "Success";
    }
    return "Error";
}
// Verify Email
export const createVerifyEmail = async (data: IVerifyEmail) => {
    const res = await fetch(`${base}/mail/verifyPassword?email=${data.email}&confirmPassword=${data.confirmPassword}`, {
        method: 'GET',
        // headers: {
        //     'Content-Type': 'application/json',
        // },
        // body: JSON.stringify(body)
    });
    if (res.ok) {
        return "Success";
    }
    return "Error";
}
// Change Password
export const createPostChangePassword = async (body: IChangePassword) => {
    const res = await fetch(`${base}/v1/auth/changePassword`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    });
    if (res.ok) {
        return "Success";
    }
    return "Error";
}


// Get User
export const createGetUser = async () => {
    const token = await getToken();
    const accessToken = token?.accessToken;
    const res = await fetch(`${base}/v1/auth/getUser`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        }
    });
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(res);
}



