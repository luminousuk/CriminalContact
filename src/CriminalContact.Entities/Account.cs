using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace CriminalContact.Entities
{
    public sealed class Account
    {
        private readonly object _transactionLock = new object();
        private readonly IList<Transaction> _transactions = new List<Transaction>();
        private decimal _balance;

        public Account(int accountNumber, decimal openingBalance = 0M)
        {
            AccountNumber = accountNumber;
            IsOpen = true;
            Balance = 0M;

            if (openingBalance > 0M)
                Deposit(openingBalance, "Opening balance");
        }

        public int AccountNumber { get; }

        public decimal Balance
        {
            get
            {
                lock (_transactionLock)
                {
                    return _balance;
                }
            }
            private set
            {
                if (value < 0)
                    throw new ArgumentException("Balance can not be set below zero");

                lock (_transactionLock)
                {
                    _balance = value;
                }
            }
        }

        public bool IsOpen { get; private set; }

        public IReadOnlyList<Transaction> Transactions
        {
            get
            {
                lock (_transactionLock)
                {
                    return new ReadOnlyCollection<Transaction>(_transactions);
                }
            }
        }

        public decimal Deposit(decimal amount, string description = null)
        {
            if (!IsOpen)
                throw new InvalidOperationException("Account is closed");

            if (amount <= 0)
                throw new ArgumentOutOfRangeException(nameof(amount), amount,
                    "Cannot deposit a zero or negative amount");

            lock (_transactionLock)
            {
                var transaction = new Transaction(amount, description);
                _transactions.Add(transaction);
                Balance += transaction.Amount;
                return Balance;
            }
        }

        public decimal Withdraw(decimal amount, string description = null)
        {
            if (!IsOpen)
                throw new InvalidOperationException("Account is closed");

            if (amount <= 0)
                throw new ArgumentOutOfRangeException(nameof(amount), amount,
                    "Cannot withdraw a zero or negative amount");

            if (Balance < amount)
                throw new ArgumentOutOfRangeException(nameof(amount), amount, "Insufficient balance to withdraw");

            lock (_transactionLock)
            {
                var transaction = new Transaction(-amount, description);
                _transactions.Add(transaction);
                Balance += transaction.Amount;
                return Balance;
            }
        }

        public decimal TransferTo(Account targetAccount, decimal amount)
        {
            if (!IsOpen)
                throw new InvalidOperationException("Account is closed");

            if (amount <= 0)
                throw new ArgumentOutOfRangeException(nameof(amount), amount,
                    "Cannot transfer a zero or negative amount");

            if (Balance < amount)
                throw new ArgumentOutOfRangeException(nameof(amount), amount, "Insufficient balance to transfer");

            lock (_transactionLock)
            {
                // TODO: Handle targetAccount.Deposit exceptions and cancel transaction
                targetAccount.Deposit(amount, $"Transfer from {AccountNumber}");
                var balance = Withdraw(amount, $"Transfer to {targetAccount.AccountNumber}");

                return balance;
            }
        }

        public void CloseAccount()
        {
            IsOpen = false;
        }
    }
}