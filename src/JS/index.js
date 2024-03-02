import Bank from './classes/bank.js';
import Branch from './classes/branch.js';
import Customer from './classes/customer.js';

const arizonaBank = new Bank("Arizona")
const westBranch = new Branch("West Branch")
const sunBranch = new Branch("Sun Branch")
const customer1 = new Customer("John", 1)
const customer2 = new Customer("Anna", 2)
const customer3 = new Customer("John", 3)

arizonaBank.addBranch(westBranch)
arizonaBank.addBranch(sunBranch)
arizonaBank.addBranch(westBranch)

arizonaBank.findBranchByName("bank")
arizonaBank.findBranchByName("sun")

arizonaBank.addCustomer(westBranch, customer1)
arizonaBank.addCustomer(westBranch, customer3)
arizonaBank.addCustomer(sunBranch, customer1)
arizonaBank.addCustomer(sunBranch, customer2)

arizonaBank.addCustomerTransaction(westBranch, customer1.getID(), 3000) // getID instead of getId
arizonaBank.addCustomerTransaction(westBranch, customer1.getID(), 2000) // getID instead of getId
arizonaBank.addCustomerTransaction(westBranch, customer2.getID(), 3000) // getID instead of getId

customer1.addTransaction(-1000) // addTransaction instead of addTransactions
console.log(customer1.getBalance())
console.log(arizonaBank.listCustomers(westBranch, true))
console.log(arizonaBank.listCustomers(sunBranch, true))