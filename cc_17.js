//Task 1
class Customer {
    constructor(name, email, vipLevel) {
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
};


console.log("----Task 1----")
let firstCustomer = new Customer("Hirun Desilva", "hirundesilva97@gmail.com")
firstCustomer.addPurchase(100);
console.log(`Customer Name: ${firstCustomer.name}`);
console.log(`Total Spent: $${firstCustomer.getTotalSpent()}`);

let secondCustomer = new Customer("Jack Desilva", "jackdesilva@gmail.com");
secondCustomer.addPurchase(200);
console.log(`Customer Name: ${secondCustomer.name}`);
console.log(`Total Spent: $${secondCustomer.getTotalSpent()}`);


//Task 2
class SalesRep {
    constructor(name) {
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

console.log("----Task 2----")
let salesRep = new SalesRep("Michael Scott");
salesRep.addClient(firstCustomer);
salesRep.addClient(secondCustomer);
console.log(`Sales Rep: ${salesRep.name}`);
salesRep.clients.forEach(client => {
    console.log(`Client: ${client.name}, Total Spent: $${client.getTotalSpent()}`);
}
);

//Task 3 
class VIPCustomer extends Customer {
    constructor(name, email, purchaseHistory, vipLevel) {
        super(name, email, purchaseHistory);
        this.vipLevel = vipLevel
    }
  
    getTotalSpent() {
        let total = super.getTotalSpent();
        return total * 1.1;
    }
};

console.log("----Task 3----")
let vipCustomers = new VIPCustomer("Will Smith, willsmith@gmail.com, Platinum")
vipCustomers.addPurchase(150)
console.log(`VIP Customer Information: ${vipCustomers.name}`);
console.log(`Total Spent with 10% Loyalty Bonus: $${vipCustomers.getTotalSpent()}`)


//Task 4
let customers = [
    new Customer("Hirun Desilva", "hirundesilva@gmail.com"),
    new Customer("Jack Desilva", "jackdesilva@gmail.com"),
    new VIPCustomer("Will Smith, willsmith@gmail.com, Platinum")
];
customers[0].addPurchase(100);
customers[1].addPurchase(200);
customers[2].addPurchase(150);

salesRep.clients = [];
customers.forEach(customer => salesRep.addClient(customer));

let totalRevenue = customers.reduce((sum, customer) => sum + customer.getTotalSpent(), 0);

let over500Spenders = customers.filter(customer => customer.getTotalSpent() > 500);

let customerSummaries = customers.map(customer => ({
    name: customer.name,
    totalSpent: customer.getTotalSpent()
}));

console.log("----Task 4: Client Report System----");
console.log(`Total Revenue: $${totalRevenue}`);

console.log("High-Spending Customers (>$500):");
over500Spenders.forEach(customer => 
    console.log(`${customer.name}: $${customer.getTotalSpent()}`)
);

console.log("Customer Summary:");
customerSummaries.forEach(summary => 
    console.log(`${summary.name}: $${summary.totalSpent}`)
);


