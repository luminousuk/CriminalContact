using System.Collections.Generic;
using CriminalContact.Entities;

namespace CriminalContact.Services
{
    public interface IBank
    {
        IReadOnlyCollection<Account> Accounts { get; }
        Account OpenAccount(decimal openingBalance);
        void GenerateInterest(decimal interestPct);
    }
}