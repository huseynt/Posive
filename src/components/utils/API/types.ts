
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

  interface IAccount {
    name: string | null | undefined;
    phoneNumber: string | null | undefined;
    email: string | null | undefined;
    birthDate: string | null | undefined;
    sex: string | null | undefined;
  }
  
  export interface IgetUser {
    id: number | null | undefined;
    firstname: string | null | undefined;
    lastname: string | null | undefined;
    email: string | null | undefined;
    created: string | null | undefined;
    phoneNumber: string | null | undefined;
    password: string  | null | undefined;
    imageUrl: string | null | undefined;
    role: string  | null | undefined;
    products: [] | null | undefined;
    orders: [] | null | undefined;
    account: IAccount[] | null | undefined;  
    address: null | undefined;
    confirmations: [] | null | undefined; 
    userPermission: [] | null | undefined; 
    subscriptions: [] | null | undefined; 
    businessDetails: null | undefined; 
    tokens: IToken[] | null | undefined;
    setting: ISetting | null | undefined;

    name: string,
    gender: string,
    birthDate: string,
  }

  export interface ISaveUserData {
    imageUrl: string | null,
    name: string,
    email: string,
    phoneNumber: string,
    gender: string,
    birthDate: string,
    password: string,
    account?: {
      gender: string,
      birthDate: string,
    }
  }
  

  export interface IGetMeals {
    id: number | null | undefined;
    name: string | null | undefined;
    receiptNo: string | null | undefined;
    orderofDay: number | null | undefined;
    category: string | null | undefined;
    imageUrl: string | null | undefined;
    price: number | null | undefined;
    stock: number | null | undefined;
    tax: number | null | undefined;
    discount: number | null | undefined;
  }



export interface IGetOrderProduct {
    name: string;
    receiptNo: string;
    orderofDay: number;
    category: string;
    imageUrl: string;
    price: number;
    stock: number | null;
    tax: number;
    discount: number;
}

export interface IGetOrders {
    orderId: string;
    productsSet: IGetOrderProduct[];
    paymentMethod: string;
}

export interface IGetOrdersResponse {
    orders: IGetOrders[];
    countOrders: number;
}