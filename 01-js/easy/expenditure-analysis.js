/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/
const transactions = [
    {
        id: 1,
        timestamp: 1656076800000,
        price: 10,
        category: "Food",
        itemName: "Pizza",
    },
    {
        id: 2,
        timestamp: 1656163200000,
        price: 5,
        category: "Beverages",
        itemName: "Coffee",
    },
    {
        id: 3,
        timestamp: 1656249600000,
        price: 15,
        category: "Food",
        itemName: "Burger",
    },
];

function calculateTotalSpentByCategory(transactions) {
    const result = transactions.reduce((acc, { category, price }) => {
        if (!acc[category]) {
            acc[category] = { category, totalSpent: 0 };
        }
        acc[category].totalSpent += price;
        return acc;
    }, {});

    return Object.values(result);
}

module.exports = calculateTotalSpentByCategory;
