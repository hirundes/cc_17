//Task 1
class Customer {
    constructor(name, email) { //properties of name, email, and purchaseHistory
        this.name = name;
        this.email = email;
        this.purchaseHistory = [];
    }
    addPurchase(amount) { //method adds a purchase amount to purchaseHistory
        this.purchaseHistory.push(amount);
    }

    getTotalSpent() {  //method returns total amount spent
        return this.purchaseHistory.reduce((total, amount) => total + amount, 0) 
    }
};

console.log("----Task 1----") //logging new customer creation and total spent after purchases
let firstCustomer = new Customer("John Desilva", "johndesilva@gmail.com") //first customer information
firstCustomer.addPurchase(100);
console.log(`Customer Name: ${firstCustomer.name}`);
console.log(`Total Spent: $${firstCustomer.getTotalSpent()}`);

let secondCustomer = new Customer("Jack Desilva", "jackdesilva@gmail.com"); //second customer information
secondCustomer.addPurchase(200);
console.log(`Customer Name: ${secondCustomer.name}`);
console.log(`Total Spent: $${secondCustomer.getTotalSpent()}`);


//Task 2
class SalesRep {
    constructor(name) { //properties of name and clients
        this.name = name;
        this.clients = [];
    }
    addClient(customer) {   //method adds a customer to the list
        this.clients.push(customer);
    }

    getClientTotal(name) {  //method finds client by name and returns total spent
        let client = this.clients.find(client => client.name === name);
        if (client) {
            return client.getTotalSpent();
        } else {
            return 0;
        }
    }
    }

console.log("----Task 2----")   //logging sales rep clients and total spent for a specific client
let salesRep = new SalesRep("Michael Scott");
salesRep.addClient(firstCustomer);
salesRep.addClient(secondCustomer);
console.log(`Sales Rep: ${salesRep.name}`);
salesRep.clients.forEach(client => {
    console.log(`Client: ${client.name}, Total Spent: $${client.getTotalSpent()}`);
}
);

//Task 3 
class VIPCustomer extends Customer {    //created VIPCustomer class extends Customer
    constructor(name, email, purchaseHistory, vipLevel) {
        super(name, email, purchaseHistory);
        this.vipLevel = vipLevel    //additional property
    }
  
    getTotalSpent() {   //override method which returns total spent with 10% loyalty bonus added
        let total = super.getTotalSpent();
        return total * 1.1;
    }
};

console.log("----Task 3----")   //logging VIP customers total spent with bonus
let vipCustomers = new VIPCustomer("Will Smith", "willsmith@gmail.com", "Platinum")
vipCustomers.addPurchase(150)
console.log(`VIP Customer Information: ${vipCustomers.name}`);
console.log(`Total Spent with 10% Loyalty Bonus: $${vipCustomers.getTotalSpent()}`)


//Task 4
let customers = [   //customer information with regular + VIP and sales
    new Customer("John Desilva", "johndesilva@gmail.com"),
    new Customer("Jack Desilva", "jackdesilva@gmail.com"),
    new VIPCustomer("Will Smith, willsmith@gmail.com, Platinum")
];
customers[0].addPurchase(100);
customers[1].addPurchase(200);
customers[2].addPurchase(150);

salesRep.clients = [];
customers.forEach(customer => salesRep.addClient(customer));

let totalRevenue = customers.reduce((sum, customer) => sum + customer.getTotalSpent(), 0); //.reduce to calculate total revenue from all customers

let over500Spenders = customers.filter(customer => customer.getTotalSpent() > 500); //.filter to find customers who spent over $500

let customerSummaries = customers.map(customer => ({    //.map to create an array of customer names and total spent
    name: customer.name,
    totalSpent: customer.getTotalSpent()
}));

console.log("----Task 4: Client Report System----"); //logging total revenue, high-spending customers, sales rep, and customer summary
console.log(`Total Revenue: $${totalRevenue}`);

console.log("High-Spending Customers (>$500):");
over500Spenders.forEach(customer => 
    console.log(`${customer.name}: $${customer.getTotalSpent()}`)
);

console.log("Sales Rep"); //logging sales rep name
console.log(`${salesRep.name}`);

console.log("Customer Summary:"); //logging customer summary with individual customer information and array
customerSummaries.forEach(customerSummaries => 
    console.log(`${customerSummaries.name}: $${customerSummaries.totalSpent}`)),
    console.log(customerSummaries);

