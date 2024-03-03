interface TransactionI{
    amount : number,
    date : Date
}

/**
 * @class
 * @constructor
 * @property {number} amount The amount of the transaction
 * @property {Date} date The date when the transaction has been made
*/
export default class Transaction implements TransactionI {

    /**
     * The amount of the transaction
     * @type {number} 
     */
    amount: number;

    /**
     * The date when the transaction has been made
     * @type {Date}
     */
    date: Date;

    /**
     * @param {number} amount The amount of the transaction
     * @param {Date?} date The date of the transaction
     */
    constructor(amount : number, date: Date = new Date()) {

        if (typeof amount !== 'number') throw console.log('Amount must be of type number!')
        this.amount = amount;

        if (!(date instanceof Date)) throw console.log('Date must be instance of Date!')
        this.date = date;
    }

}