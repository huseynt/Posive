
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


  interface IToken {
    token: string;
  }

  interface ISetting {
    id: number | null | undefined;
    theme: string | null | undefined;
    language: string | null | undefined;
    currency: string | null | undefined;
    timeZone: string | null | undefined;
    size: string | null | undefined;
    icons: string | null | undefined;
  }
  
  export interface IgetUser {
    id: number | null | undefined;
    firstname: string | null | undefined;
    lastname: string | null | undefined;
    email: string | null | undefined;
    created: string | null | undefined;
    phoneNumber: string | null | undefined;
    password: string  | null | undefined;
    imageUrl: string | undefined;
    role: string  | null | undefined;
    products: [] | null | undefined;
    orders: [] | null | undefined;
    account: [] | null | undefined;  
    address: null | undefined;
    confirmations: [] | null | undefined; 
    userPermission: [] | null | undefined; 
    subscriptions: [] | null | undefined; 
    businessDetails: null | undefined; 
    tokens: IToken[] | null | undefined;
    setting: ISetting | null | undefined;
  }
  

