const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};


const transactions = [];
let transactionId = 0;

const account = {
  balance: 0,



  createTransaction(amount, type) {
    return {
      id: ++transactionId,
      type,
      amount,
    };
  },

  deposit(amount) {
    this.balance += amount;
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    transactions.push(transaction);
  },

  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Недостатньо коштів для зняття!');
      return;
    }
    this.balance -= amount;
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    transactions.push(transaction);
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    return transactions.find(({ id: transId }) => transId === id);
  },

  getTransactionTotal(type) {
    return transactions.reduce((total, { type: t, amount }) => {
      return t === type ? total + amount : total;
    }, 0);
  },

  get transactionsList() {
    return transactions;
  },
};


account.deposit(1000);
account.withdraw(300);
account.deposit(200);
account.withdraw(800); 

console.log('Поточний баланс:', account.getBalance());

console.log('Транзакція з ID 2:', account.getTransactionDetails(2));

console.log('Сума депозитів:', account.getTransactionTotal(Transaction.DEPOSIT));
console.log('Сума зняття:', account.getTransactionTotal(Transaction.WITHDRAW));

console.log('Уся історія транзакцій:');
console.table(account.transactionsList);
