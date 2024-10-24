import { getCookie } from '../reUse/cookie';
import { base } from './API';


export const createRefreshToken = async () => {
    const accessToken = getCookie('access_token');
    const res = await fetch(`${base}/v1/auth/refresh-token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        },
    });
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(res);
}

