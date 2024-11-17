import { createGetUser } from "../API/API";
import { IgetUser } from "../API/types";
import { deleteCookie, setCookie } from "./cookie";

export const saveUser = ( userData : IgetUser | undefined ) => {
    localStorage.setItem("theme", userData?.setting?.theme || "light");

    setCookie("userFirstname", userData?.firstname || "", 7);
    setCookie("userLastname", userData?.lastname || "", 7);
    setCookie("userEmail", userData?.email || "", 7);
    setCookie("userPhone", userData?.phoneNumber || "", 7);
    setCookie("userImage", userData?.imageUrl || "", 7);
    setCookie("userRole", userData?.role || "", 7);
    setCookie("userTheme", !userData?.setting?.theme ? "light" : userData?.setting?.theme  || "", 7);
}

export const deleteUser = () => {
    deleteCookie("userEmail");
    deleteCookie("userFirstname");
    deleteCookie("userLastname");
    deleteCookie("userPhone");
    deleteCookie("userImage");
    deleteCookie("userRole");
    deleteCookie("userTheme");
    deleteCookie("i18next");
}

export const userRole = async () => {
    const data = await createGetUser();
    return data.role;
}