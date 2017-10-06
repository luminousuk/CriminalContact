using System;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace CriminalContact.Services.Tests
{
    [TestClass]
    public class BankTests
    {
        [TestMethod]
        public void OpenAccount_MultipleAccounts_UniqueAccountNumbers()
        {
            const int accountCount = 1000;

            var bank = new Bank();
            
            for (var i = 0; i < accountCount; i++)
            {
                bank.OpenAccount();
            }

            Assert.AreEqual(accountCount, bank.Accounts.Select(a => a.AccountNumber).Distinct().Count());
        }

        [TestMethod]
        public void GenerateInterest_MultileAccounts_BalancesCorrect()
        {
            const int accountCount = 1000;
            const decimal interestPct = 0.1M;

            var bank = new Bank()
            {
                InterestPct = interestPct
            };
            var rand = new Random();
            var initialBalances = Enumerable.Repeat(1M, accountCount).Select(i => (i * rand.Next(1000, 100000)) / 100).ToList();
            
            for (var i = 0; i < accountCount; i++)
            {
                bank.OpenAccount(initialBalances[i]);
            }

            bank.GenerateInterest();

            var resultingBalances = initialBalances.Select(i => i + (i * interestPct)).ToList();

            var actualBalances = bank.Accounts.Select(a => a.Balance).ToList();

            CollectionAssert.AreEqual(resultingBalances, actualBalances);

        }
    }
}
