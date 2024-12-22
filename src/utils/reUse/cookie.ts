export const setCookie = (name: string, value: string, days: number) => {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `; expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value || ""}${expires}; path=/`;
  };


export const getCookie = (name: string): string | null => {
    const nameEQ = `${name}=`;
    const cookiesArray = document.cookie.split(';');
    
    for (const cookie of cookiesArray) {
        const c = cookie.trim();
        if (c.startsWith(nameEQ)) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
};


export const deleteCookie = (name: string) => {
    document.cookie = `${name}=; Max-Age=0; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
};