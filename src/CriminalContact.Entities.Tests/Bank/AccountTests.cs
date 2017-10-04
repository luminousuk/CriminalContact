using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using CriminalContact.Entities.Bank;

namespace CriminalContact.Entities.Tests.Bank
{
    [TestClass]
    public class AccountTests
    {
        [TestMethod]
        public void Deposit_PositiveAmount_ReturnsCorrectBalance()
        {
            var account = new Account(null, 0, 0);

            var balance = account.Deposit(100.0M);

            Assert.AreEqual(balance, 100.0M);
        }

        [TestMethod]
        public void Withdraw_PositiveAmount_ReturnsCorrectBalance()
        {
            var account = new Account(null, 0, 200.0M);

            var balance = account.Withdraw(100.0M);

            Assert.AreEqual(balance, 100.0M);
        }
    }
}
