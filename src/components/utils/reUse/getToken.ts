import { getCookie } from './cookie';
// import { createRefreshToken } from '../API/refreshToken';

// getToken function
export const getToken = async () => {
    if ( sessionStorage.getItem('access_token') && sessionStorage.getItem('refresh_token') ) {
        return { accessToken: sessionStorage.getItem('access_token'), refreshToken: sessionStorage.getItem('refresh_token') };
    }
    else if ( getCookie('access_token') && getCookie('refresh_token') ) {
        return { accessToken: getCookie('access_token'), refreshToken: getCookie('refresh_token') };
    }
    else if ( !sessionStorage.getItem('access_token') && !sessionStorage.getItem('refresh_token') && !getCookie('access_token') && !getCookie('refresh_token') ) {
        // const refreshToken = getCookie('refresh_token');
        // if (refreshToken) {
        //     const res = createRefreshToken();
        //     if (res) {
        //         return res.then((data) => {
        //             sessionStorage.setItem('access_token', data.accessToken);
        //             sessionStorage.setItem('refresh_token', data.refreshToken);
        //             setCookie('access_token', data.accessToken, 7);
        //             setCookie('refresh_token', data.refreshToken, 7);
        //             console.log('refresh token', data);
        //             return { accessToken: data.accessToken, refreshToken: data.refreshToken };
        //         });
        //     }
        // }
        return null;
    }
};

