using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace CriminalContact.Entities.Tests
{
    [TestClass]
    public class TransactionTests
    {
        [TestMethod]
        public void Transaction_Multiple_SumEqualsBalance()
        {
            var account = new Account(null, 101);

            account.Deposit(100.0M);
            account.Withdraw(50.0M);
            account.Deposit(80.0M);
            account.Withdraw(10.0M);

            var transactionSum = account.Transactions.Sum(t => t.Amount);

            Assert.AreEqual(account.Balance, transactionSum);
        }
    }
}