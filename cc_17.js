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


//Task 2
class SalesRep {
    constructor(name, clients) {
        this.name = name;
        this.clients = [];
    }
    addClient(customer) {
        this.clients.push(customer);
    }

    getClientTotal(name) {
        let client = this.client.find(client => client.name === name);
        if (client) {
            return client.getTotalSpent();
        } else {
            return 0;
        }

        }
        
    }


