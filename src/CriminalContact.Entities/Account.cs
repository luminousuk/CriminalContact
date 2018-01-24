namespace CriminalContact.Entities
{
    using System;
    using System.Collections.Generic;
    using System.Collections.ObjectModel;

    public sealed class Account
    {
        private readonly object transactionLock = new object();

        private readonly IList<Transaction> transactions = new List<Transaction>();

        private decimal balance;

        public Account(int accountNumber, decimal openingBalance = 0M)
        {
            AccountNumber = accountNumber;
            IsOpen = true;
            Balance = 0M;

            if (openingBalance > 0M) Deposit(openingBalance, "Opening balance");
        }

        public int AccountNumber { get; }

        public decimal Balance
        {
            get
            {
                lock (transactionLock)
                {
                    return balance;
                }
            }

            private set
            {
                if (value < 0) throw new ArgumentException("Balance can not be set below zero");

                lock (transactionLock)
                {
                    balance = value;
                }
            }
        }

        public bool IsOpen { get; private set; }

        public IReadOnlyList<Transaction> Transactions
        {
            get
            {
                lock (transactionLock)
                {
                    return new ReadOnlyCollection<Transaction>(transactions);
                }
            }
        }

        public void CloseAccount()
        {
            IsOpen = false;
        }

        public decimal Deposit(decimal amount, string description = null)
        {
            if (!IsOpen) throw new InvalidOperationException("Account is closed");

            if (amount <= 0)
                throw new ArgumentOutOfRangeException(
                    nameof(amount),
                    amount,
                    "Cannot deposit a zero or negative amount");

            lock (transactionLock)
            {
                var transaction = new Transaction(amount, description);
                transactions.Add(transaction);
                Balance += transaction.Amount;
                return Balance;
            }
        }

        public decimal TransferTo(Account targetAccount, decimal amount)
        {
            if (!IsOpen) throw new InvalidOperationException("Account is closed");

            if (amount <= 0)
                throw new ArgumentOutOfRangeException(
                    nameof(amount),
                    amount,
                    "Cannot transfer a zero or negative amount");

            if (Balance < amount)
                throw new ArgumentOutOfRangeException(nameof(amount), amount, "Insufficient balance to transfer");

            lock (transactionLock)
            {
                // TODO: Handle targetAccount.Deposit exceptions and cancel transaction
                targetAccount.Deposit(amount, $"Transfer from {AccountNumber}");
                var newBalance = Withdraw(amount, $"Transfer to {targetAccount.AccountNumber}");

                return newBalance;
            }
        }

        public decimal Withdraw(decimal amount, string description = null)
        {
            if (!IsOpen) throw new InvalidOperationException("Account is closed");

            if (amount <= 0)
                throw new ArgumentOutOfRangeException(
                    nameof(amount),
                    amount,
                    "Cannot withdraw a zero or negative amount");

            if (Balance < amount)
                throw new ArgumentOutOfRangeException(nameof(amount), amount, "Insufficient balance to withdraw");

            lock (transactionLock)
            {
                var transaction = new Transaction(-amount, description);
                transactions.Add(transaction);
                Balance += transaction.Amount;
                return Balance;
            }
        }
    }
}