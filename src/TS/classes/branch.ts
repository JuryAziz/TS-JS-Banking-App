import Customer from './customer.js';

interface BranchI {
    name: string,
    customers: Customer[]
}

/**
 * A class representing a banking branch
 * @class
 * @constructor
 * @property {string} name The name of the branch
 * @property {Customer[]} customers An array of all customers of the branch
 */
export default class Branch implements BranchI {

    /**
     * name of the branch
     * @type {string}
     */
    name: string;

    /**
     * array of customers in the branch
     * @type {Customer[]}
     */
    customers: Customer[] = [];

    /**
     * @param {string} name name of the branch
     */
    constructor(name: string) {
        if (typeof name !== 'string') throw console.log('The name of the branch must be of type string!');

        this.name = name;
        console.log('Branch', name, 'has been created successfully');
    }

    /**
     * returns this branch's name
     * @returns {string} branch name
     */
    getName = (): string => {
        return this.name;
    }

    /**
    * returns this branch's customers list
    * @returns {Customer[]} array of  customers 
    */
    getCustomers = (): Customer[] => {
        return this.customers;
    }

    /**
     * adds a customer to the instance of the branch
     * @param {Customer} customer the customer object to be added to the branch
     * @returns {boolean} true if the customer was added successfully, false otherwise
     */
    addCustomer = (customer: Customer): boolean => {

        if (!(customer instanceof Customer)) {
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
     * @returns {boolean} true if the transaction was added successfully, false otherwise
     */
    addCustomerTransaction(customerID: number, amount: number): boolean {
        if ((typeof customerID !== 'number') || (typeof amount !== 'number')) {
            console.log('Both the ID of the customer and the amount must be of type number!');
            return false;
        }

        const customer = this.customers.find((customer) => customer.getID() === customerID);

        if (!customer) {
            console.log('Customer is not registered and cannot be found');
            return false;
        }


        return customer.addTransaction(amount);

    }
}