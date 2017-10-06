using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;
using CriminalContact.Entities;

namespace CriminalContact.Services
{
    public class Bank : IBank
    {
        private static readonly Random Rand = new Random();

        private readonly IList<Account> _accounts = new List<Account>();
        public IReadOnlyCollection<Account> Accounts => new ReadOnlyCollection<Account>(_accounts);
        public decimal InterestPct { get; set; } = 0.1M;
        public int InterestIntervalSeconds { get; set; } = 60 * 60; // 1 hour

        public Account OpenAccount(decimal openingBalance = 0M)
        {
            var account = new Account(GenerateAccountNumber(), openingBalance);
            _accounts.Add(account);
            return account;
        }

        public void GenerateInterest()
        {
            Parallel.ForEach(_accounts, account =>
            {
                var interest = account.Balance * InterestPct;
                account.Deposit(interest, "Interest");
            });
        }

        private int GenerateAccountNumber()
        {
            var accountNumbers = _accounts.Select(a => a.AccountNumber).ToList();

            int accountNumber;
            do
            {
                accountNumber = Rand.Next(1000, 9999);
            } while (accountNumbers.Contains(accountNumber));

            return accountNumber;
        }
    }
}