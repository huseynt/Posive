import staticToken from './token';


const token = localStorage.getItem("token");
if (!localStorage.getItem("token")) {
    localStorage.setItem("token", staticToken?.token);
}

export const config = {
    headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${token ? token : staticToken?.token}`,
    }
}