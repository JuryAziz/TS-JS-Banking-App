import Customer from './customer.js';
import Transaction from './transaction.js';

/**
 * A class representing a banking branch
 * @class
 * @constructor
 * @property {string} name The name of the branch
 * @property {Customer[]} customers An array of all customers of the branch
 */
export default class Branch {

    /**
     * name of the branch
     * @type {string}
     */
    name;

    /**
     * array of customers in the branch
     * @type {Customer[]}
     */
    customers = [];

    /**
     * @param {string} name name of the branch
     */
    constructor(name) {
        if (typeof name !== 'string') {
            console.log('The name of the branch must be of type string!');
            return;
        }
        this.name = name;
        console.log('Branch', name, 'has been created successfully');
    }

    /**
     * returns this branch's name
     * @returns {string} branch name
     */
    getName() {
        return this.name;
    }

    /**
    * returns this branch's customers list
    * @returns {Customer[]} array of  customers 
    */
    getCustomers() {
        return this.customers;
    }

    /**
     * adds a customer to the instance of the branch
     * @param {Customer} customer the customer object to be added to the branch
     * @returns {boolean} true if the customer was added successfully, false otherwise
     */
    addCustomer(customer) {

        if (!customer instanceof Customer) {
            console.log('Customer must be instance of Customer!');
            return false;
        }

        if (this.customers.find((c) => c.getID() === customer.getID())) {
            console.log('A costumer can only be added once');
            return false;
        }

        this.customers.push(customer);
        return true;
    }

    /**
     * adds a transaction with the amount specified to the costumer with the matching id
     * @param {number} customerID the customer ID 
     * @param {number} amount the amount of the transaction
     * @returns 
     */
    addCustomerTransaction(customerID, amount) {
        if (typeof customerID !== 'number' || typeof amount !== 'number') {
            console.log('Both the ID of the customer and the amount must be of type number!');
            return false;
        }

        const customer = find((customer) => customer.getID === customerID);

        if (!customer) {
            console.log('Customer is not registered and cannot be found');
            return false;
        }

        return customer.addTransaction(amount);

    }
}