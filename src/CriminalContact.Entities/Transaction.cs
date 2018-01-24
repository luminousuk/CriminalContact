namespace CriminalContact.Entities
{
    using System;

    public sealed class Transaction
    {
        public Transaction(decimal amount, string description = null)
        {
            Amount = amount;
            Description = description;
        }

        public decimal Amount { get; }

        public string Description { get; }

        public DateTime Timestamp { get; } = DateTime.Now;

        public Guid TransactionId { get; } = Guid.NewGuid();
    }
}