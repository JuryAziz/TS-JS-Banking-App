import Transaction from './transaction.js';

/**
 * @class
 * @constructor
 * @property {string} name  The name of the customer
 * @property {number} id The customer ID
 * @property {Transaction[]} transactions An array of customer transactions
 */
export default class Customer {

    /**
     * name of the customer
     * @type {string}
     */
    name;

    /**
     * ID of the customer
     * @type {number}
     */
    id;

    /**
     * An array of customer transaction
     * @type {Transaction[]}
     */
    transactions = [];


    /**
     * @param {string} name The name of the customer
     * @param {number} id The ID of the customer
     */
    constructor(name, id) {
        if (typeof name !== 'string') {
            console.log('name must be of type string')
            return;
        }
        if (typeof id !== 'number') {
            console.log('id must be of type number')
            return;
        }
        this.name = name;
        this.id = id;
        console.log('the customer', name, 'with the ID', id, 'has been created successfully');
    }

    /**
     * returns the name of the customer
     * @returns {string} customer name
     */
    getName() {
        return this.name;
    }

    /**
     * returns the ID of the customer
     * @returns {number} customer ID
     */
    getID() {
        return this.id;
    }

    /**
     * returns an array of all customer transactions 
     * @returns {Transaction[]} customer transactions 
     */
    getTransactions() {
        return this.transactions;
    }

    /**
     * returns the customer balance 
     * @returns {number} customer's balance
     */
    getBalance() {
        const total = this.transactions.length > 0 ? this.transactions.map((transaction) => transaction.amount).reduce((acc, transaction) => acc + transaction) : 0;
        return total;
    }

    /**
     * adds a transaction of the specified amount to the customer's transactions list
     * @param {number} amount the amount of the transaction     
     * @returns {boolean} true if transaction was added successfully. false otherwise 
     */
    addTransaction(amount) {
        if (typeof amount !== 'number') {
            console.log('Amount must be of type number');
            return false;
        }

        if (amount * -1 > this.getBalance()) {
            console.log('Sorry! insufficient fund');
            return false;
        }

        this.transactions.push(new Transaction(amount));
        console.log('The transaction has been added successfully');
        return true;

    }
}