
export interface IcreatePostAuthenticate {
    email: string;
    password: string;
}

export interface IVerifyEmail {
    email: string;
    verifyPassword: string;
  }

export interface IChangePassword {
    email: string;
    password: string;
  }