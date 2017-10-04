using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace CriminalContact.Entities.Bank
{
    public sealed class Account
    {
        private readonly IList<Transaction> _transactions = new List<Transaction>();
        private readonly object _transactionLock = new object();

        public Account(Player player, int accountNumber, decimal openingBalance = 0)
        {
            Player = player;
            AccountNumber = accountNumber;
            Balance = openingBalance;
        }

        public int AccountNumber { get; }
        public Player Player { get; }
        public decimal Balance { get; private set; }
        public IReadOnlyList<Transaction> Transactions => new ReadOnlyCollection<Transaction>(_transactions);

        public decimal Deposit(decimal amount)
        {
            if (amount < 0)
                throw new ArgumentOutOfRangeException(nameof(amount), amount, "Cannot deposit a negative amount");

            lock (_transactionLock)
            {
                var transaction = new Transaction(amount);
                _transactions.Add(transaction);
                Balance += transaction.Amount;
                return Balance;
            }
        }

        public decimal Withdraw(decimal amount)
        {
            if (amount < 0)
                throw new ArgumentOutOfRangeException(nameof(amount), amount, "Cannot withdraw a negative amount");

            lock (_transactionLock)
            {
                var transaction = new Transaction(-amount);
                _transactions.Add(transaction);
                Balance += transaction.Amount;
                return Balance;
            }
        }
    }
}