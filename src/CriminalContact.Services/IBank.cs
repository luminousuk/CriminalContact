namespace CriminalContact.Services
{
    using System.Collections.Generic;

    using CriminalContact.Entities;

    public interface IBank
    {
        IReadOnlyCollection<Account> Accounts { get; }

        decimal InterestPct { get; set; }

        void GenerateInterest();

        Account OpenAccount(decimal openingBalance);
    }
}