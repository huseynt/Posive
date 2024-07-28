interface Order {
    orderId: string;
    receiptNo: string;
    menu: string[];
    collectedBy: string;
    dateTime: string;
    paymentMethod: string;
    action: string;
  }


  export const orders: Order[] = [
    { orderId: '1', receiptNo: '123456', menu: ['Chicken Burger', 'Fries', 'Coke'], collectedBy: 'John Doe', dateTime: '12/12/2021 12:00', paymentMethod: 'Cash', action: '+-+-+-' },
    { orderId: '2', receiptNo: '654321', menu: ['Veggie Pizza', 'Salad', 'Juice'], collectedBy: 'Jane Doe', dateTime: '01/01/2022 15:30', paymentMethod: 'Credit Card', action: '++++++' },
    { orderId: '3', receiptNo: '111222', menu: ['Beef Steak', 'Mashed Potatoes', 'Red Wine'], collectedBy: 'Jim Beam', dateTime: '02/02/2022 18:45', paymentMethod: 'Cash', action: '-----' },
    { orderId: '4', receiptNo: '222333', menu: ['Grilled Salmon', 'Rice', 'Water'], collectedBy: 'Anna Smith', dateTime: '03/03/2022 19:00', paymentMethod: 'Debit Card', action: '+----+' },
    { orderId: '5', receiptNo: '333444', menu: ['Cheese Burger', 'Onion Rings', 'Pepsi'], collectedBy: 'Mike Johnson', dateTime: '04/04/2022 20:30', paymentMethod: 'Cash', action: '++--++' },
    { orderId: '6', receiptNo: '444555', menu: ['Chicken Wings', 'Garlic Bread', 'Beer'], collectedBy: 'Chris Lee', dateTime: '05/05/2022 21:00', paymentMethod: 'Credit Card', action: '++++--' },
    { orderId: '7', receiptNo: '555666', menu: ['Pasta Carbonara', 'Garlic Bread', 'Lemonade'], collectedBy: 'Jessica Brown', dateTime: '06/06/2022 13:15', paymentMethod: 'Cash', action: '--++--' },
    { orderId: '8', receiptNo: '666777', menu: ['Caesar Salad', 'Soup', 'Tea'], collectedBy: 'Tom Harris', dateTime: '07/07/2022 14:45', paymentMethod: 'Credit Card', action: '+++++-' },
    { orderId: '9', receiptNo: '777888', menu: ['Margarita Pizza', 'Salad', 'Water'], collectedBy: 'Linda Clark', dateTime: '08/08/2022 16:00', paymentMethod: 'Cash', action: '---++-' },
    { orderId: '10', receiptNo: '888999', menu: ['Fish and Chips', 'Coleslaw', 'Soda'], collectedBy: 'Robert Davis', dateTime: '09/09/2022 17:30', paymentMethod: 'Debit Card', action: '++-++-' },
    { orderId: '11', receiptNo: '999000', menu: ['BBQ Ribs', 'Cornbread', 'Iced Tea'], collectedBy: 'Emily Garcia', dateTime: '10/10/2022 18:45', paymentMethod: 'Cash', action: '+-+--+' },
    { orderId: '12', receiptNo: '000111', menu: ['Spaghetti Bolognese', 'Salad', 'Red Wine'], collectedBy: 'Michael Robinson', dateTime: '11/11/2022 19:00', paymentMethod: 'Credit Card', action: '+++---' },
    { orderId: '13', receiptNo: '111222', menu: ['Veggie Burger', 'Sweet Potato Fries', 'Smoothie'], collectedBy: 'Sarah Martinez', dateTime: '12/12/2022 20:30', paymentMethod: 'Cash', action: '---+++' },
    { orderId: '14', receiptNo: '222333', menu: ['Chicken Alfredo', 'Breadsticks', 'White Wine'], collectedBy: 'David Rodriguez', dateTime: '01/01/2023 21:00', paymentMethod: 'Credit Card', action: '+++++-' },
    { orderId: '15', receiptNo: '333444', menu: ['Taco Salad', 'Chips & Salsa', 'Margarita'], collectedBy: 'Sophia Hernandez', dateTime: '02/02/2023 13:15', paymentMethod: 'Debit Card', action: '-++---' },
    { orderId: '16', receiptNo: '444555', menu: ['Grilled Chicken', 'Vegetables', 'Water'], collectedBy: 'John Walker', dateTime: '03/03/2023 14:45', paymentMethod: 'Cash', action: '++++++' },
    { orderId: '17', receiptNo: '555666', menu: ['Beef Tacos', 'Rice', 'Beer'], collectedBy: 'Emma Hall', dateTime: '04/04/2023 16:00', paymentMethod: 'Credit Card', action: '--+++-' },
    { orderId: '18', receiptNo: '666777', menu: ['Pulled Pork Sandwich', 'Fries', 'Soda'], collectedBy: 'James Scott', dateTime: '05/05/2023 17:30', paymentMethod: 'Cash', action: '++----' },
    { orderId: '19', receiptNo: '777888', menu: ['Fried Rice', 'Egg Roll', 'Tea'], collectedBy: 'Ava Green', dateTime: '06/06/2023 18:45', paymentMethod: 'Debit Card', action: '++++--' },
    { orderId: '20', receiptNo: '888999', menu: ['Chocolate Cake', 'Ice Cream', 'Coffee'], collectedBy: 'Oliver Baker', dateTime: '07/07/2023 19:00', paymentMethod: 'Credit Card', action: '----++' },
  ];