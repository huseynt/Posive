import { getCookie } from './cookie';

// getToken function
export const getToken = async () => {
    if ( sessionStorage.getItem('access_token') && sessionStorage.getItem('refresh_token') ) {
        return { accessToken: sessionStorage.getItem('access_token'), refreshToken: sessionStorage.getItem('refresh_token') };
    }
    else if ( getCookie('access_token') && getCookie('refresh_token') ) {
        return { accessToken: getCookie('access_token'), refreshToken: getCookie('refresh_token') };
    }
    else {
        return null;
    }
};

