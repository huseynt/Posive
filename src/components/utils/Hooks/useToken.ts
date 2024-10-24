import { getCookie, deleteCookie } from '../reUse/cookie';

export interface IToken {
    accessToken: string;
    refreshToken: string;
}


export const useToken = () => {
    const accessToken = sessionStorage.getItem('access_token');
    const refreshToken = sessionStorage.getItem('refresh_token');
    const accessCookie = getCookie('access_token');
    const refreshCookie = getCookie('refresh_token');

    if (accessToken && refreshToken) {
        return { accessToken, refreshToken };
    }
    else if (accessCookie && refreshCookie) {
        sessionStorage.setItem('access_token', accessCookie);
        sessionStorage.setItem('refresh_token', refreshCookie);
        return { accessToken: accessCookie, refreshToken: refreshCookie };
    }
    return null;
}


export const resetToken = () => {
    deleteCookie("access_token");
    deleteCookie("refresh_token");
    sessionStorage.removeItem("access_token");
    sessionStorage.removeItem("refresh_token");
};


