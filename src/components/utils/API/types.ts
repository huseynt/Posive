
export interface IcreatePostAuthenticate {
    email: string;
    password: string;
}

export interface IVerifyEmail {
    email: string;
    confirmPassword: string;
  }

export interface IChangePassword {
    email: string;
    newPassword: string;
  }