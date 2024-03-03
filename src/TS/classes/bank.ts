import Branch from './branch.js';
import Customer from './customer.js';

interface BankI {
    name: string,
    branches: Branch[]
}
/**
 * Class Bank
 * @class
 * @constructor
 * @property {string} name The name of the bank
 * @property {branch[]} branches An array of bank branches
 */
export default class Bank {

    /**
     * Bank name
     * @type {string}
     */
    name: string;

    /**
     * array of Bank branches
     * @type {Branch[]}
     */
    branches: Branch[] = [];

    /**
     * @param {string} name the name of the Bank
     */
    constructor(name: string) {
        if (typeof name !== 'string') throw console.log('the name of the bank must be of type string!');

        this.name = name;
        console.log('The bank', name, 'has been created successfully');
    }

    /**
     * adds a branch to the bank
     * @param {Branch} branch a branch object to be added to the bank 
     * @returns {boolean} true if the branch was added successfully, false otherwise
     */
    addBranch = (branch: Branch): boolean => {

        if (!(branch instanceof Branch)) return false;

        if (this.checkBranch(branch)) {
            console.log(branch.getName(), 'already exists in the bank', this.name);
            return false;
        }

        this.branches.push(branch);
        console.log(branch.getName(), 'has been added to the bank', this.name, 'successfully');
        return true;
    }

    /**
     * adds a customer the specified branch
     * @param {Branch} branch the branch at which the customer needs to be added
     * @param {Customer} customer the customer to be added to the branch
     * @returns {boolean} true if the customer is added successfully, false otherwise
     */
    addCustomer = (branch: Branch, customer: Customer): boolean => {
        if (!(branch instanceof Branch) || !(customer instanceof Customer)) return false;

        const searchedBranch = this.branches.find(b => b.getName().toLowerCase() === branch.getName().toLowerCase())

        if (!searchedBranch) {
            console.log('The branch', branch.getName(), 'does not exist');
            return false;
        }

        if (branch.getCustomers().find(c => c.getID() === customer.getID())) {
            console.log('The customer you\'re trying to add is already added to the specified branch');
            return false;
        }

        searchedBranch.getCustomers().push(customer);
        console.log('The customer', customer.getName(), 'has been added to', branch.getName(), 'successfully');
        return true;

    }

    /**
     * adds a transaction to a customer at a certain branch
     * @param {Branch} branch the branch where the customer is in 
     * @param {string} customerID customer object id
     * @param {number} amount the amount of the transaction
     * @returns {boolean} true if the transaction was added successfully to the customer of the specified branch, false otherwise
     */
    addCustomerTransaction = (branch: Branch, customerID: number, amount: number): boolean => {


        const searchedBranch = this.branches.find((b) => b.getName().toLowerCase() === branch.getName().toLowerCase());

        if (!searchedBranch) {
            console.log('The branch', branch.getName(), 'does not exist in this bank');
            return false;
        }

        const customer = branch.getCustomers().find((customer) => customer.id === customerID);

        if (!customer) {
            console.log('The customer you\'re trying to add transaction to is not in the specified branch');
            return false;
        }

        return customer.addTransaction(amount);

    }

    /**
     * searching for branches by name
     * @param {string} branchName the name of the branch
     * @returns {Branch[] | null} array of matching branches, null if no matching branches were found
     */
    findBranchByName = (branchName: string): Branch[] | null => {
        if (typeof branchName !== 'string') return null;

        const searchedBranch = this.branches.filter((branch) => branchName.toLowerCase() === branch.getName().toLowerCase())

        if (!searchedBranch) {
            console.log('Branch', branchName, 'was not found');
            return null;
        }

        return searchedBranch;
    }

    /**
     * checks whether the branch exists in the bank or not
     * @param {Branch} branch branch object
     * @returns {boolean} true if branch exists, false otherwise
     */
    checkBranch = (branch: Branch): boolean => {
        if (!(branch instanceof Branch)) return false;
        return this.branches.length > 0 ? (this.branches.find(b => b.getName().toLowerCase() === branch.getName().toLowerCase()) ? true : false) : false;
    }

    /**
     * prints all customers of the branch specified and their transactions if requested.
     * @param {Branch} branch branch object
     * @param {boolean?} includeTransactions value to include customer transactions
     */
    listCustomers = (branch: Branch, includeTransactions = false): void => {
        if (!(branch instanceof Branch) || typeof includeTransactions !== 'boolean') return;

        const searchedBranch = this.branches.find((b) => b.getName().toLowerCase() === branch.getName().toLowerCase());

        if (!searchedBranch) {
            console.log('The branch' + branch + 'does not exist');
            return;
        }

        if (!searchedBranch.getCustomers() || searchedBranch.getCustomers().length === 0) {
            console.log('This branch has no customers');
            return;
        }

        console.log(branch.getName(), 'Customers list:');
        searchedBranch.getCustomers().forEach(customer => {

            console.log('\n Name:', customer.getName(), 'with ID:', customer.getID());

            includeTransactions ? customer.getTransactions().length > 0 ?
                console.log('\t' + customer.getTransactions().map(transaction => 'Amount: ' + transaction.amount + ' -- Date: ' + transaction.date.toUTCString()).join('\n\t')) :
                console.log('\t The customer has no transactions') : 0;
        });

    }
}