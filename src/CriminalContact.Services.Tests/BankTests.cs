namespace CriminalContact.Services.Tests
{
    using System;
    using System.Linq;

    using Microsoft.VisualStudio.TestTools.UnitTesting;

    [TestClass]
    public class BankTests
    {
        [TestMethod]
        public void GenerateInterestMultipleAccountsBalancesCorrect()
        {
            const int AccountCount = 1000;
            const decimal InterestPct = 0.1M;

            var bank = new Bank { InterestPct = InterestPct };
            var rand = new Random();
            var initialBalances = Enumerable.Repeat(1M, AccountCount).Select(i => i * rand.Next(1000, 100000) / 100)
                .ToList();

            for (var i = 0; i < AccountCount; i++) bank.OpenAccount(initialBalances[i]);

            bank.GenerateInterest();

            var resultingBalances = initialBalances.Select(i => i + i * InterestPct).ToList();

            var actualBalances = bank.Accounts.Select(a => a.Balance).ToList();

            CollectionAssert.AreEqual(resultingBalances, actualBalances);
        }

        [TestMethod]
        public void OpenAccountMultipleAccountsUniqueAccountNumbers()
        {
            const int AccountCount = 1000;

            var bank = new Bank();

            for (var i = 0; i < AccountCount; i++) bank.OpenAccount();

            Assert.AreEqual(AccountCount, bank.Accounts.Select(a => a.AccountNumber).Distinct().Count());
        }
    }
}