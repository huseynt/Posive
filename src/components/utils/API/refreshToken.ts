import { deleteCookie, getCookie } from '../reUse/cookie';
import { base } from './API';


export const createRefreshToken = async () => {
    const accessToken = getCookie('access_token');
    const res = await fetch(`${base}/v1/auth/refreshTokens`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        },
    });
    if (res.ok) {
        console.log('refresh token', res);
        const data = await res.json();
        sessionStorage.setItem('access_token', data.access_token);
        sessionStorage.setItem('refresh_token', data.refresh_token);
        deleteCookie('access_token');
        deleteCookie('refresh_token');
        console.log(data);
        return "ok";
    }
    return Promise.reject(res);
}

