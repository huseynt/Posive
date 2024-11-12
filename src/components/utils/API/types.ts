
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
    stock: number | null | undefined;
    tax: number | null;
    discount: number | null;
    description: string;
    order: number;
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
  orderId: string;
  userName: string;
  place: string;
  tables: string[] | null;
  productsSet: IPostOrder[] | object[] | null;
  paymentMethod: string;
}

export interface IPostOrder {
  receiptNo: string | null | undefined; 
}

// export interface IPostTables {
//   number: string | null | undefined; 
// }






export interface IGetOrdersResponse {
  orders: IGetOrder[];
  countOrders: number;
  sales: number;
  cashiers: string[];
}
export interface IGetOrder {
  orderId: number;
  receiptNumber: string[] | null;
  cashier: string | null;
  menu: string[] | null;
  price: number;
  place: string | null;
  tables: string[] | null;
  orderDate: string;
  paymentMethod: string;
  menus: IGetMeals[];
  size: string[];
}



export interface IPostCardData {
  number: string;
  name: string;
  date: string;
  cvv: string;
}


export interface IVerifyCardData {
  confirmPassword: string;
}



// orderId: orderId,
// userName: cashier,
// productsSet: products,
// price: price,
// orderDate: orderDate,
// paymentMethod: paymentMethod,

export interface ISaveOrder {
  orderId: number;
  userName: string;
  productsSet: { receiptNo: string }[] | [];
  price: number;
  orderDate: string;
  paymentMethod: string;
}


// {
//   "products": [
//       {
//           "id": 1,
//           "name": "Tsunami Beef Egg",
//           "receiptNo": "134",
//           "orderofDay": 0,
//           "category": "Main Course",
//           "imageUrl": "https://firebasestorage.googleapis.com/v0/b/posive-229b1.appspot.com/o/meals%2Ftsunami_beef_egg.png?alt=media&token=c79e552a-344e-4567-9416-43bf1e670f06",
//           "price": 16,
//           "stock": 6,
//           "tax": 1,
//           "discount": 1,
//           "description": "A healthy salad made with fresh vegetables and fruits"
//       },
//       {
//           "id": 5,
//           "name": "Indomie with Cheese",
//           "receiptNo": "126",
//           "orderofDay": 0,
//           "category": "Fast Food",
//           "imageUrl": "https://firebasestorage.googleapis.com/v0/b/posive-229b1.appspot.com/o/meals%2Findomie.png?alt=media&token=1e7c816f-2ed3-4cd4-985c-e9fe13fea288",
//           "price": 15,
//           "stock": 0,
//           "tax": 1,
//           "discount": 9,
//           "description": "A delicious plate of indomie with cheese and vegetables"
//       },
//       {
//           "id": 4,
//           "name": "Health Salad",
//           "receiptNo": "125",
//           "orderofDay": 0,
//           "category": "Healthy Food",
//           "imageUrl": "https://firebasestorage.googleapis.com/v0/b/posive-229b1.appspot.com/o/meals%2Fhealth_salad.png?alt=media&token=fa0d246d-743f-4795-81a4-b5942b2f38c4",
//           "price": 10,
//           "stock": 0,
//           "tax": 1,
//           "discount": 10,
//           "description": "A healthy salad made with fresh vegetables and fruits"
//       }
//   ],
//   "countProducts": 3
// }


export interface IGetProducts {
  products: IProducts[];
  countProducts: number;
}
export interface IProducts {
  id: number;
  name: string;
  receiptNo: string;
  orderofDay: number;
  category: string;
  imageUrl: string;
  price: number;
  stock: number;
  tax: number;
  discount: number;
  description: string;
}








// export interface IGetOrdersResponse {
//   orders: IGetOrders[];
//   countOrders: number;
// }
// export interface IGetOrders {
//   orderId: string;
//   productsSet: IGetOrderProduct[];
//   paymentMethod: string;
// }

// export interface IGetOrderProduct {
//   name: string;
//   receiptNo: string;
//   orderofDay: number;
//   category: string;
//   imageUrl: string;
//   price: number;
//   stock: number | null;
//   tax: number;
//   discount: number;
// }
