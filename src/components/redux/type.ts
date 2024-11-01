export interface IOrderState {
  orders: IGetMeals[],
  place: string,
  tables: string,
  name: string
}
export interface IGetMeals {
  id: string | null | undefined;
  name: string | null;
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
