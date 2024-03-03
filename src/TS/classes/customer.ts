import Transaction from './transaction.js';

interface CustomerI{
    name: string,
    id: number
}

/**
 * @class
 * @constructor
 * @property {string} name  The name of the customer
 * @property {number} id The customer ID
 * @property {Transaction[]} transactions An array of customer transactions
 */
export default class Customer implements CustomerI {

    /**
     * name of the customer
     * @type {string}
     */
    name : string;

    /**
     * ID of the customer
     * @type {number}
     */
    id : number;

    /**
     * An array of customer transaction
     * @type {Transaction[]}
     */
    transactions : Transaction[] = [];


    /**
     * @param {string} name The name of the customer
     * @param {number} id The ID of the customer
     */
    constructor(name : string, id : number) {
        if (typeof name !== 'string') throw console.log('name must be of type string')

        if (typeof id !== 'number') throw console.log('id must be of type number')

        this.name = name;
        this.id = id;
        console.log('the customer', name, 'with the ID', id, 'has been created successfully');
    }

    /**
     * returns the name of the customer
     * @returns {string} customer name
     */
    getName = () : string => {
        return this.name;
    }

    /**
     * returns the ID of the customer
     * @returns {number} customer ID
     */
    getID = () : number => {
        return this.id;
    }

    /**
     * returns an array of all customer transactions 
     * @returns {Transaction[]} customer transactions 
     */
    getTransactions = () : Transaction[] => {
        return this.transactions;
    }

    /**
     * returns the customer balance 
     * @returns {number} customer's balance
     */
    getBalance = () : number => {
        const total = this.transactions.length > 0 ? this.transactions.map((transaction) => transaction.amount).reduce((acc, transaction) => acc + transaction) : 0;
        return total;
    }

    /**
     * adds a transaction of the specified amount to the customer's transactions list
     * @param {number} amount the amount of the transaction     
     * @returns {boolean} true if transaction was added successfully. false otherwise 
     */
    addTransaction = (amount : number) : boolean => {
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