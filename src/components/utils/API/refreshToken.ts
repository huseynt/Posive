import { deleteCookie } from '../reUse/cookie';
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
        console.log('refresh token', res);
        const data = await res.json();
        deleteCookie('access_token');
        deleteCookie('refresh_token');
        sessionStorage.setItem('access_token', data.access_token);
        sessionStorage.setItem('refresh_token', data.refresh_token);
        console.log(data, "refresh token");
        sessionStorage.setItem('refreshDate', new Date().toISOString());
        window.location.reload()
    }
    return Promise.reject(res);
}

