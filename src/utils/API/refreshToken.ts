import { deleteCookie, getCookie, setCookie } from '../reUse/cookie';
import { getToken } from '../reUse/getToken';



export const base = import.meta.env.VITE_BASE
export const createRefreshToken = async () => {
    const token = await getToken();
    const refreshToken = token?.refreshToken;
    
    const res = await fetch(`${base}/v1/auth/refresh`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${refreshToken}`
        },
    });
    if (res.ok) {
        const data = await res.json();
        sessionStorage.setItem('access_token', data.access_token);
        sessionStorage.setItem('refresh_token', data.refresh_token);
        console.log(data, "refresh token");
        sessionStorage.setItem('refreshDate', new Date().toISOString());
        window.location.reload()

        if (getCookie('access_token') && getCookie('refresh_token')) {
            const tokenExpiry = 7;
            const resfreshTokenExpiry = 365;
            setCookie('access_token', data.access_token, tokenExpiry);
            setCookie('refresh_token', data.refresh_token, resfreshTokenExpiry);
        } else {
            deleteCookie('access_token');
            deleteCookie('refresh_token');
        }
    }
    return Promise.reject(res);
}

