interface IOrder {
    orderId: string;
    receiptNo: string;
    menu: string[];
    collectedBy: string;
    dateTime: string;
    paymentMethod: string;
    action: string;
    totalPrice: number;
  }


  export const orders: IOrder[] = [
    { orderId: '1', receiptNo: '123456', menu: ['Chicken Burger', 'Fries', 'Coke'], collectedBy: 'John Doe', dateTime: '08/02/2024 12:00', paymentMethod: 'Cash', action: '+-+-+-', totalPrice: 1000.99 },
    { orderId: '2', receiptNo: '654321', menu: ['Veggie Pizza', 'Salad', 'Juice'], collectedBy: 'Jane Doe', dateTime: '07/31/2024 15:30', paymentMethod: 'Credit Card', action: '++++++', totalPrice: 2300.45 },
    { orderId: '3', receiptNo: '111222', menu: ['Beef Steak', 'Mashed Potatoes', 'Red Wine'], collectedBy: 'Jim Beam', dateTime: '01/02/2024 18:45', paymentMethod: 'Cash', action: '-----', totalPrice: 3200.00 },
    { orderId: '4', receiptNo: '222333', menu: ['Grilled Salmon', 'Rice', 'Water'], collectedBy: 'Anna Smith', dateTime: '03/03/2024 19:00', paymentMethod: 'Debit Card', action: '+----+', totalPrice: 3005.20 },
    { orderId: '5', receiptNo: '333444', menu: ['Cheese Burger', 'Onion Rings', 'Pepsi'], collectedBy: 'Mike Johnson', dateTime: '04/04/2024 20:30', paymentMethod: 'Cash', action: '++--++', totalPrice: 1500.75 },
    { orderId: '6', receiptNo: '444555', menu: ['Chicken Wings', 'Garlic Bread', 'Beer'], collectedBy: 'Chris Lee', dateTime: '05/05/2024 21:00', paymentMethod: 'Credit Card', action: '++++--', totalPrice: 2002.50 },
    { orderId: '7', receiptNo: '555666', menu: ['Pasta Carbonara', 'Garlic Bread', 'Lemonade'], collectedBy: 'Jessica Brown', dateTime: '06/06/2023 13:15', paymentMethod: 'Cash', action: '--++--', totalPrice: 1800.95 },
    { orderId: '8', receiptNo: '666777', menu: ['Caesar Salad', 'Soup', 'Tea'], collectedBy: 'Tom Harris', dateTime: '07/07/2024 14:45', paymentMethod: 'Credit Card', action: '+++++-', totalPrice: 1600.80 },
    { orderId: '9', receiptNo: '777888', menu: ['Margarita Pizza', 'Salad', 'Water'], collectedBy: 'Linda Clark', dateTime: '08/08/2024 16:00', paymentMethod: 'Cash', action: '---++-', totalPrice: 2000.00 },
    { orderId: '10', receiptNo: '888999', menu: ['Fish and Chips', 'Coleslaw', 'Soda'], collectedBy: 'Robert Davis', dateTime: '07/10/2024 17:30', paymentMethod: 'Debit Card', action: '++-++-', totalPrice: 1900.99 },
    { orderId: '11', receiptNo: '999000', menu: ['BBQ Ribs', 'Cornbread', 'Iced Tea'], collectedBy: 'Emily Garcia', dateTime: '10/10/2024 18:45', paymentMethod: 'Cash', action: '+-+--+', totalPrice: 2004.50 },
    { orderId: '12', receiptNo: '000111', menu: ['Spaghetti Bolognese', 'Salad', 'Red Wine'], collectedBy: 'Michael Robinson', dateTime: '11/11/2024 19:00', paymentMethod: 'Credit Card', action: '+++---', totalPrice: 2007.30 },
    { orderId: '13', receiptNo: '111222', menu: ['Veggie Burger', 'Sweet Potato Fries', 'Smoothie'], collectedBy: 'Sarah Martinez', dateTime: '12/12/2024 20:30', paymentMethod: 'Cash', action: '---+++', totalPrice: 1007.45 },
    { orderId: '14', receiptNo: '222333', menu: ['Chicken Alfredo', 'Breadsticks', 'White Wine'], collectedBy: 'David Rodriguez', dateTime: '01/01/2024 21:00', paymentMethod: 'Credit Card', action: '+++++-', totalPrice: 3000.25 },
    { orderId: '15', receiptNo: '333444', menu: ['Taco Salad', 'Chips & Salsa', 'Margarita'], collectedBy: 'Sophia Hernandez', dateTime: '02/02/2024 13:15', paymentMethod: 'Debit Card', action: '-++---', totalPrice: 1004.65 },
    { orderId: '16', receiptNo: '444555', menu: ['Grilled Chicken', 'Vegetables', 'Water'], collectedBy: 'John Walker', dateTime: '03/03/2024 14:45', paymentMethod: 'Cash', action: '++++++', totalPrice: 2001.10 },
    { orderId: '17', receiptNo: '555666', menu: ['Beef Tacos', 'Rice', 'Beer'], collectedBy: 'Emma Hall', dateTime: '04/04/2024 16:00', paymentMethod: 'Credit Card', action: '--+++-', totalPrice: 2600.80 },
    { orderId: '18', receiptNo: '666777', menu: ['Pulled Pork Sandwich', 'Fries', 'Soda'], collectedBy: 'James Scott', dateTime: '05/05/2024 17:30', paymentMethod: 'Cash', action: '++----', totalPrice: 2000.35 },
    { orderId: '19', receiptNo: '777888', menu: ['Fried Rice', 'Egg Roll', 'Tea'], collectedBy: 'Ava Green', dateTime: '06/06/2024 18:45', paymentMethod: 'Debit Card', action: '++++--', totalPrice: 1008.60 },
    { orderId: '20', receiptNo: '888999', menu: ['Chocolate Cake', 'Ice Cream', 'Coffee'], collectedBy: 'Oliver Baker', dateTime: '07/07/2024 19:00', paymentMethod: 'Credit Card', action: '----++', totalPrice: 1002.75 },
  ];
  
export interface ICardReport {
  "1M": {
    labels: string[];
    datasets: number[];
  };
  "1Y": {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
      borderColor: string;
    }[];
  };
}
  

  
export const cardReport: ICardReport = {
  "1M": {
    labels: [
      "Mar 1",
      "Mar 6",
      "Mar 11",
      "Mar 18",
      "Mar 23",
      "Mar 27",
      "Mar 31",
    ],
    datasets: [
      orders.filter((order) => /03\/01\/2024/.test(order.dateTime)).reduce((acc, curr) => acc + curr.totalPrice, 0),
      orders.filter((order) => /03\/06\/2024/.test(order.dateTime)).reduce((acc, curr) => acc + curr.totalPrice, 0),
      orders.filter((order) => /03\/11\/2024/.test(order.dateTime)).reduce((acc, curr) => acc + curr.totalPrice, 0),
      orders.filter((order) => /03\/18\/2024/.test(order.dateTime)).reduce((acc, curr) => acc + curr.totalPrice, 0),
      orders.filter((order) => /03\/23\/2024/.test(order.dateTime)).reduce((acc, curr) => acc + curr.totalPrice, 0),
      orders.filter((order) => /03\/27\/2024/.test(order.dateTime)).reduce((acc, curr) => acc + curr.totalPrice, 0),
      orders.filter((order) => /03\/31\/2024/.test(order.dateTime)).reduce((acc, curr) => acc + curr.totalPrice, 0),
    ]
  },



  "1Y": {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "1Y",
        data: [
          orders.filter((order) => /01\/\d{2}\/2024/.test(order.dateTime)).reduce((acc, curr) => acc + curr.totalPrice, 0),
          orders.filter((order) => /02\/\d{2}\/2024/.test(order.dateTime)).reduce((acc, curr) => acc + curr.totalPrice, 0),
          orders.filter((order) => /03\/\d{2}\/2024/.test(order.dateTime)).reduce((acc, curr) => acc + curr.totalPrice, 0),
          orders.filter((order) => /04\/\d{2}\/2024/.test(order.dateTime)).reduce((acc, curr) => acc + curr.totalPrice, 0),
          orders.filter((order) => /05\/\d{2}\/2024/.test(order.dateTime)).reduce((acc, curr) => acc + curr.totalPrice, 0),
          orders.filter((order) => /06\/\d{2}\/2024/.test(order.dateTime)).reduce((acc, curr) => acc + curr.totalPrice, 0),
          orders.filter((order) => /07\/\d{2}\/2024/.test(order.dateTime)).reduce((acc, curr) => acc + curr.totalPrice, 0),
          orders.filter((order) => /08\/\d{2}\/2024/.test(order.dateTime)).reduce((acc, curr) => acc + curr.totalPrice, 0),
          orders.filter((order) => /09\/\d{2}\/2024/.test(order.dateTime)).reduce((acc, curr) => acc + curr.totalPrice, 0),
          orders.filter((order) => /10\/\d{2}\/2024/.test(order.dateTime)).reduce((acc, curr) => acc + curr.totalPrice, 0),
          orders.filter((order) => /11\/\d{2}\/2024/.test(order.dateTime)).reduce((acc, curr) => acc + curr.totalPrice, 0),
          orders.filter((order) => /12\/\d{2}\/2024/.test(order.dateTime)).reduce((acc, curr) => acc + curr.totalPrice, 0),
        ],
        backgroundColor: "#F44236",
        borderColor: "#F44236",
      },
    ],
  },
};
  
// export const cardReport = {
//   "1M": {
//     labels: [
//       "Mar 1",
//       "Mar 6",
//       "Mar 11",
//       "Mar 18",
//       "Mar 23",
//       "Mar 27",
//       "Mar 31",
//     ],
//     datasets: [
//       {
//         label: "1M",
//         data: [60.5, 50.3, 60.5, 51.6, 62.2, 53.6, 63.7],
//         backgroundColor: "#0AAF60",
//         borderColor: "#0AAF60",
//       },
//     ],
//   },
//   "3M": {
//     labels: ["Jan", "Feb", "Mar"],
//     datasets: [
//       {
//         label: "3M",
//         data: [330, 320, 335],
//         backgroundColor: "#3981F7",
//         borderColor: "#3981F7",
//       },
//     ],
//   },
//   "6M": {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//     datasets: [
//       {
//         label: "6M",
//         data: [300, 280, 290, 285, 310, 315],
//         backgroundColor: "#FFCA29",
//         borderColor: "#FFCA29",
//       },
//     ],
//   },
//   "1Y": {
//     labels: [
//       "Jan",
//       "Feb",
//       "Mar",
//       "Apr",
//       "May",
//       "Jun",
//       "Jul",
//       "Aug",
//       "Sep",
//       "Oct",
//       "Nov",
//       "Dec",
//     ],
//     datasets: [
//       {
//         label: "1Y",
//         data: [3000, 3850, 2930, 2850, 3170, 3105, 3240, 3150, 3020, 3540, 4050, 4170],
//         backgroundColor: "#F44236",
//         borderColor: "#F44236",
//       },
//     ],
//   },
// };