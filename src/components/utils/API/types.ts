
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
    id: number | null;
    theme: string | null;
    language: string | null;
    currency: string | null;
    timeZone: string | null;
    size: string | null;
    icons: string | null;
  }

  interface IAccount {
    name: string | null | undefined;
    password: string | null | undefined;
    phoneNumber: string | null | undefined;
    email: string | null | undefined;
    birthDate: string | null | undefined;
    gender: string | null | undefined;
    imageUrl: string | null | undefined;
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
    id: string | null | undefined;
    name: string | null | undefined;
    receiptNo: string | null | undefined;
    orderofDay: number | null | undefined;
    category: string | null | undefined;
    imageUrl: string | null;
    price: number ;
    stock: number | null;
    tax: number | null;
    discount: number | null;
    description: string;
    order: number;
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

export interface ISavePreferences {
    theme: string | null;
    language: string | null;
    currency: string | null;
    timeZone: string | null;
    size: string | null;
    icons: string | null;
}

export interface ISavePlans {
  subscriptionId: string | null, 
  plan: {
    name: string | null,
  }
}

export interface IPostOrders {
  ordeId: string;
  name: string;
  place: string;
  tables: IPostTables[] | null;
  productsSet: IPostOrder[] | null;
  paymentMethod: string;
}

export interface IPostOrder {
  receiptNo: string | null | undefined; 
}

export interface IPostTables {
  number: string | null | undefined; 
}