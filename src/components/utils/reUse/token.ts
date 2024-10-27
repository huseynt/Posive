import { createRefreshToken } from "../API/refreshToken";
// import { setCookie } from "./cookie";

// export const refreshToken = async () => {
//     const res = createRefreshToken();
//     if (res) {
//         return res.then((data) => {
//             // sessionStorage.setItem('access_token', data.accessToken);
//             // sessionStorage.setItem('refresh_token', data.refreshToken);
//             // setCookie('access_token', data.accessToken, 7);
//             // setCookie('refresh_token', data.refreshToken, 7);
//             console.log('refresh token', data);
//             // return { accessToken: data.accessToken, refreshToken: data.refreshToken };
            
//         });
//     }
// }

export const refreshAuth = async (data: object) => {
    if (!data) {
      const refreshToken = await createRefreshToken();
      if (refreshToken == "ok") {
        data && console.log("refreshed");
      }
    }
  };
