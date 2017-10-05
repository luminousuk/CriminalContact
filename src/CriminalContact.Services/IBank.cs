using System.Collections.Generic;
using CriminalContact.Entities;

namespace CriminalContact.Services
{
    public interface IBank
    {
        IReadOnlyCollection<Account> Accounts { get; }
        Account OpenAccount(Player player, decimal openingBalance);
        decimal Withdraw(Account account);
        decimal Deposit(Account account);
        decimal Transfer(Account sourceAccount, Account targetAccount);
    }
}