namespace CriminalContact.Entities.Tests
{
    using System.Linq;

    using Microsoft.VisualStudio.TestTools.UnitTesting;

    [TestClass]
    public class TransactionTests
    {
        [TestMethod]
        public void TransactionMultipleSumEqualsBalance()
        {
            var account = new Account(101);

            account.Deposit(100.0M);
            account.Withdraw(50.0M);
            account.Deposit(80.0M);
            account.Withdraw(10.0M);

            var transactionSum = account.Transactions.Sum(t => t.Amount);

            Assert.AreEqual(account.Balance, transactionSum);
        }
    }
}