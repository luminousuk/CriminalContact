using System.Collections.Generic;
using CriminalContact.Entities;

namespace CriminalContact.Services
{
    public interface IBank
    {
        IReadOnlyCollection<Account> Accounts { get; }
        decimal InterestPct { get; set; }
        int InterestIntervalSeconds { get; set; }
        Account OpenAccount(decimal openingBalance);
        void GenerateInterest();
    }
}