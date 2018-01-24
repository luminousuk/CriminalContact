namespace CriminalContact.Services
{
    using System;
    using System.Collections.Generic;
    using System.Collections.ObjectModel;
    using System.Linq;
    using System.Threading.Tasks;

    using CriminalContact.Entities;

    public class Bank : IBank
    {
        private static readonly Random Rand = new Random();

        private readonly IList<Account> accounts = new List<Account>();

        public IReadOnlyCollection<Account> Accounts => new ReadOnlyCollection<Account>(accounts);

        public decimal InterestPct { get; set; } = 0.1M;

        public void GenerateInterest()
        {
            Parallel.ForEach(
                accounts,
                account =>
                    {
                        var interest = account.Balance * InterestPct;
                        account.Deposit(interest, "Interest");
                    });
        }

        public Account OpenAccount(decimal openingBalance = 0M)
        {
            var account = new Account(GenerateAccountNumber(), openingBalance);
            accounts.Add(account);
            return account;
        }

        private int GenerateAccountNumber()
        {
            var accountNumbers = accounts.Select(a => a.AccountNumber).ToList();

            int accountNumber;
            do
            {
                accountNumber = Rand.Next(1000, 9999);
            }
            while (accountNumbers.Contains(accountNumber));

            return accountNumber;
        }
    }
}