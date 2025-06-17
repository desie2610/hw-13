// *
//  * Типів транзацкій всього два.
//  * Можна покласти або зняти гроші з рахунку.
//  */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw', 
};

/*
 * Кожна транзакція - це об'єкт з властивостями: id, type і amount
 */
const account = {
    id: 1,
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій

  transactions: [],
  /*
   * Метод створює і повертає об'єкт транзакції.
   * Приймає суму і тип транзакції.
   */

  createTransaction(amount, type) {const newTransaction = {
   amount: amount,
   type: type,
   id: this.id,
  }
  this.id += 1
  return newTransaction
},
  /*
   * Метод відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
  deposit(amount) {
    this.balance += amount
    const transaction = this.createTransaction(amount, this.DEPOSIT)
    this.transactions.push(transaction)
  },

  /*
   * Метод відповідає за зняття суми з балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій.
   *
   * Якщо amount більше, ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливо, недостатньо коштів.
   */
  withdraw(amount) {
    

if (amount < this.withdraw) {
this.balance -= amount
    const transaction = this.createTransaction(amount, this.WITHDRAW)
    this.transactions.push(transaction)
} else {alert('не достатньо коштів')}
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance
  },
  /*
   * Метод шукає і повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    for (const element of this.transactions) {
        // console.log(element);
        if (element.id ===id) {
            return element;
        } else {
            return null
        }
    }
    
  },

  /*

   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {},
};

account.deposit(123)
account.deposit(123)
account.deposit(123)
account.deposit(123)
account.withdraw(111)
account.withdraw(111)
account.withdraw(111)
console.log(account.getBalance());
console.log(account.getTransactionDetails());
console.log(account.getTransactionTotal());


console.log(account);


