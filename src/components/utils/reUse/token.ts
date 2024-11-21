import { createRefreshToken } from "../API/refreshToken";

export const refreshAuth = async (data: object) => {
    if (!data) {
      const refreshToken = await createRefreshToken();
      if (refreshToken == "ok") {
        data && console.log("refreshed");
      }
    }
  };
