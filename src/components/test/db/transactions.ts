interface Order {
    orderId: string;
    receiptNo: string;
    menu: string[];
    collectedBy: string;
    dateTime: string;
    paymentMethod: string;
    action: string;
    totalPrice: number;
  }


  export const orders: Order[] = [
    { orderId: '1', receiptNo: '123456', menu: ['Chicken Burger', 'Fries', 'Coke'], collectedBy: 'John Doe', dateTime: '08/02/2024 12:00', paymentMethod: 'Cash', action: '+-+-+-', totalPrice: 12.99 },
    { orderId: '2', receiptNo: '654321', menu: ['Veggie Pizza', 'Salad', 'Juice'], collectedBy: 'Jane Doe', dateTime: '07/31/2024 15:30', paymentMethod: 'Credit Card', action: '++++++', totalPrice: 23.45 },
    { orderId: '3', receiptNo: '111222', menu: ['Beef Steak', 'Mashed Potatoes', 'Red Wine'], collectedBy: 'Jim Beam', dateTime: '02/02/2024 18:45', paymentMethod: 'Cash', action: '-----', totalPrice: 45.00 },
    { orderId: '4', receiptNo: '222333', menu: ['Grilled Salmon', 'Rice', 'Water'], collectedBy: 'Anna Smith', dateTime: '03/03/2024 19:00', paymentMethod: 'Debit Card', action: '+----+', totalPrice: 35.20 },
    { orderId: '5', receiptNo: '333444', menu: ['Cheese Burger', 'Onion Rings', 'Pepsi'], collectedBy: 'Mike Johnson', dateTime: '04/04/2024 20:30', paymentMethod: 'Cash', action: '++--++', totalPrice: 15.75 },
    { orderId: '6', receiptNo: '444555', menu: ['Chicken Wings', 'Garlic Bread', 'Beer'], collectedBy: 'Chris Lee', dateTime: '05/05/2024 21:00', paymentMethod: 'Credit Card', action: '++++--', totalPrice: 22.50 },
    { orderId: '7', receiptNo: '555666', menu: ['Pasta Carbonara', 'Garlic Bread', 'Lemonade'], collectedBy: 'Jessica Brown', dateTime: '06/06/2023 13:15', paymentMethod: 'Cash', action: '--++--', totalPrice: 18.95 },
    { orderId: '8', receiptNo: '666777', menu: ['Caesar Salad', 'Soup', 'Tea'], collectedBy: 'Tom Harris', dateTime: '07/07/2024 14:45', paymentMethod: 'Credit Card', action: '+++++-', totalPrice: 16.80 },
    { orderId: '9', receiptNo: '777888', menu: ['Margarita Pizza', 'Salad', 'Water'], collectedBy: 'Linda Clark', dateTime: '08/08/2024 16:00', paymentMethod: 'Cash', action: '---++-', totalPrice: 20.00 },
    { orderId: '10', receiptNo: '888999', menu: ['Fish and Chips', 'Coleslaw', 'Soda'], collectedBy: 'Robert Davis', dateTime: '07/10/2024 17:30', paymentMethod: 'Debit Card', action: '++-++-', totalPrice: 19.99 },
    { orderId: '11', receiptNo: '999000', menu: ['BBQ Ribs', 'Cornbread', 'Iced Tea'], collectedBy: 'Emily Garcia', dateTime: '10/10/2024 18:45', paymentMethod: 'Cash', action: '+-+--+', totalPrice: 24.50 },
    { orderId: '12', receiptNo: '000111', menu: ['Spaghetti Bolognese', 'Salad', 'Red Wine'], collectedBy: 'Michael Robinson', dateTime: '11/11/2024 19:00', paymentMethod: 'Credit Card', action: '+++---', totalPrice: 27.30 },
    { orderId: '13', receiptNo: '111222', menu: ['Veggie Burger', 'Sweet Potato Fries', 'Smoothie'], collectedBy: 'Sarah Martinez', dateTime: '12/12/2024 20:30', paymentMethod: 'Cash', action: '---+++', totalPrice: 17.45 },
    { orderId: '14', receiptNo: '222333', menu: ['Chicken Alfredo', 'Breadsticks', 'White Wine'], collectedBy: 'David Rodriguez', dateTime: '01/01/2024 21:00', paymentMethod: 'Credit Card', action: '+++++-', totalPrice: 30.25 },
    { orderId: '15', receiptNo: '333444', menu: ['Taco Salad', 'Chips & Salsa', 'Margarita'], collectedBy: 'Sophia Hernandez', dateTime: '02/02/2024 13:15', paymentMethod: 'Debit Card', action: '-++---', totalPrice: 14.65 },
    { orderId: '16', receiptNo: '444555', menu: ['Grilled Chicken', 'Vegetables', 'Water'], collectedBy: 'John Walker', dateTime: '03/03/2024 14:45', paymentMethod: 'Cash', action: '++++++', totalPrice: 21.10 },
    { orderId: '17', receiptNo: '555666', menu: ['Beef Tacos', 'Rice', 'Beer'], collectedBy: 'Emma Hall', dateTime: '04/04/2024 16:00', paymentMethod: 'Credit Card', action: '--+++-', totalPrice: 26.80 },
    { orderId: '18', receiptNo: '666777', menu: ['Pulled Pork Sandwich', 'Fries', 'Soda'], collectedBy: 'James Scott', dateTime: '05/05/2024 17:30', paymentMethod: 'Cash', action: '++----', totalPrice: 20.35 },
    { orderId: '19', receiptNo: '777888', menu: ['Fried Rice', 'Egg Roll', 'Tea'], collectedBy: 'Ava Green', dateTime: '06/06/2024 18:45', paymentMethod: 'Debit Card', action: '++++--', totalPrice: 18.60 },
    { orderId: '20', receiptNo: '888999', menu: ['Chocolate Cake', 'Ice Cream', 'Coffee'], collectedBy: 'Oliver Baker', dateTime: '07/07/2024 19:00', paymentMethod: 'Credit Card', action: '----++', totalPrice: 12.75 },
  ];
  