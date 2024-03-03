/**
 * @class
 * @constructor
 * @property {number} amount The amount of the transaction
 * @property {Date} date The date when the transaction has been made
*/
export default class Transaction {
    /**
     * @param {number} amount The amount of the transaction
     * @param {Date?} date The date of the transaction
     */
    constructor(amount, date = new Date()) {
        if (typeof amount !== 'number')
            throw console.log('Amount must be of type number!');
        this.amount = amount;
        if (!(date instanceof Date))
            throw console.log('Date must be instance of Date!');
        this.date = date;
    }
}
