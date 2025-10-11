const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const account = {
  balance: 0,

  transactions: [],

  createTransaction(amount, type) {
    return {
      id: this.transactions.length + 1,
      type,
      amount,
    };
  },

  deposit(amount) {
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    const { transactions } = this;
    transactions.push(transaction);
    this.balance += amount;
  },

  withdraw(amount) {
    const { balance, transactions } = this;

    if (amount > balance) {
      console.log("UU dont have moneeey!!!");
      return;
    }

    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    transactions.push(transaction);
    this.balance -= amount;
  },

  getBalance() {
    const { balance } = this;
    return balance;
  },

  getTransactionDetails(id) {
    const { transactions } = this;
    return transactions.find(({ id: transId }) => transId === id);
  },

  getTransactionTotal(type) {
    const { transactions } = this;

    return transactions.reduce((total, { type: t, amount }) => {
      return t === type ? total + amount : total;
    }, 0);
  },
};

account.deposit(1000);
account.deposit(500);
account.withdraw(300);
account.withdraw(1500);
console.log("balansic:", account.getBalance());
console.log("all transaction:", account.transactions);
console.log("detali 2 transacii:", account.getTransactionDetails(2));
console.log(
  "summ of deposites:",
  account.getTransactionTotal(Transaction.DEPOSIT)
);
console.log(
  "summ of taking money:",
  account.getTransactionTotal(Transaction.WITHDRAW)
);
