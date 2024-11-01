export interface IMeal { 
    key?: string | undefined;
    id?: string | number | null | undefined;
    name: string | null | undefined;
    category: string | null | undefined;
    imageUrl: string | null | undefined;
    price: number;
    description: string,
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