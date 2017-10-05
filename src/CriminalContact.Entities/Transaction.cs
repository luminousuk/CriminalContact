using System;

namespace CriminalContact.Entities
{
    public sealed class Transaction
    {
        public Transaction(decimal amount, string description = null)
        {
            Amount = amount;
            Description = description;
        }

        public Guid TransactionId { get; } = Guid.NewGuid();
        public DateTime Timestamp { get; } = DateTime.Now;
        public decimal Amount { get; }
        public string Description { get; }
    }
}