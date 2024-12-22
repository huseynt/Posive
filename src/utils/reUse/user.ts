import { createGetUser } from "../API/API";
import { IgetUser } from "../API/types";
import { deleteCookie, setCookie } from "./cookie";

export const saveUser = ( userData : IgetUser | undefined ) => {
    localStorage.setItem("theme", userData?.setting?.theme || "light");

    setCookie("userFirstname", userData?.firstname || "", 1);
    setCookie("userLastname", userData?.lastname || "", 1);
    setCookie("userEmail", userData?.email || "", 1);
    setCookie("userPhone", userData?.phoneNumber || "", 1);
    setCookie("userImage", userData?.imageUrl || "", 1);
    setCookie("userRole", userData?.role || "", 1);
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