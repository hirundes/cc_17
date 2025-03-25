//Task 1
class Customer {
    constructor(name, email, purchaseHistory) {
        this.name = name;
        this.email = email;
        this.purchaseHistory = [];
    }
    addPurchase(amount) {
        this.purchaseHistory.push(amount);
    }

    getTotalSpent() {
        return this.purchaseHistory.reduce((total, amount) => total + amount, 0)
    }

}

let firstCustomer = new Customer(`Customer Name: ${"Hirun"}, Email: ${"hirundesilva@gmail.com"}`)
firstCustomer.addPurchase(100)
console.log(`${firstCustomer.name} total Spent: $${firstCustomer.getTotalSpent()}`);




