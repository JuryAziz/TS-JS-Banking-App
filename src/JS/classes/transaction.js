
/**
 * @class
 * @constructor
 * @property {number} amount The amount of the transaction
 * @property {Date} date The date when the transaction has been made
*/
export default class Transaction {

    /**
     * The amount of the transaction
     * @type {number} 
     */
    amount;

    /**
     * The date when the transaction has been made
     * @type {Date}
     */
    date;

    /**
     * @param {number} amount The amount of the transaction
     * @param {Date?} date The date of the transaction
     */
    constructor(amount, date = new Date()) {
        if (typeof amount !== 'number') {
            console.log('Amount must be of type number!');
            return;
        }
        if (!date instanceof Date) {
            console.log('date must be of instance of Date!');
            return;
        }
        this.amount = amount;
        this.date = date;
    }

}