using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Runtime.InteropServices.ComTypes;
using CriminalContact.Entities;

namespace CriminalContact.Services
{
    public class Bank : IBank
    {
        private readonly IList<Account> _accounts = new List<Account>();
        public IReadOnlyCollection<Account> Accounts => new ReadOnlyCollection<Account>(_accounts);
        public Account OpenAccount(Player player, decimal openingBalance = 0M)
        {
            var account = new Account(player, GenerateAccountNumber(), openingBalance);
            _accounts.Add(account);
            return account;
        }

        public decimal Withdraw(Account account)
        {
            throw new NotImplementedException();
        }

        public decimal Deposit(Account account)
        {
            throw new NotImplementedException();
        }

        public decimal Transfer(Account sourceAccount, Account targetAccount)
        {
            throw new NotImplementedException();
        }

        private int GenerateAccountNumber()
        {
            var accountNumbers = _accounts.Select(a => a.AccountNumber).ToList();
            var rand = new Random();

            int accountNumber;
            do
            {
                accountNumber = rand.Next(1000, 9999);
            } while (accountNumbers.Contains(accountNumber));

            return accountNumber;
        }
    }
}
