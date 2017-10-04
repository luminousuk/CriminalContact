using System;

namespace CriminalContact.Entities.Bank
{
    public sealed class Transaction
    {
        public Transaction(decimal amount)
        {
            Amount = amount;
        }

        public Guid TransactionId { get; } = Guid.NewGuid();
        public DateTime Timestamp { get; } = DateTime.Now;
        public decimal Amount { get; }
    }
}