using System;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace CriminalContact.Entities.Tests
{
    [TestClass]
    public class AccountTests
    {
        [TestMethod]
        public void Deposit_PositiveAmount_ReturnsCorrectBalance()
        {
            var account = new Account(0);

            var balance = account.Deposit(100.0M);

            Assert.AreEqual(100.0M, balance);
        }

        [TestMethod]
        public void Deposit_NegativeAmount_ThrowsException()
        {
            var account = new Account(0);

            Assert.ThrowsException<ArgumentOutOfRangeException>(() => account.Deposit(-100.0M));
        }

        [TestMethod]
        public void Deposit_Mulithreaded_ReturnsCorrectBalance()
        {
            var account = new Account(0, 100.0M);

            var tasks = new Task[]
            {
                Task.Factory.StartNew(() => account.Deposit(10.0M)),
                Task.Factory.StartNew(() => account.Deposit(20.0M)),
                Task.Factory.StartNew(() => account.Deposit(30.0M)),
                Task.Factory.StartNew(() => account.Deposit(40.0M))
            };
            Task.WaitAll(tasks);

            Assert.AreEqual(200.0M, account.Balance);
        }

        [TestMethod]
        public void Withdraw_PositiveAmount_ReturnsCorrectBalance()
        {
            var account = new Account(0, 200.0M);

            var balance = account.Withdraw(100.0M);

            Assert.AreEqual(100.0M, balance);
        }

        [TestMethod]
        public void Withdraw_NegativeAmount_ThrowsException()
        {
            var account = new Account(0);

            Assert.ThrowsException<ArgumentOutOfRangeException>(() => account.Withdraw(-100.0M));
        }

        [TestMethod]
        public void Withdraw_InsufficientBalance_ThrowsException()
        {
            var account = new Account(0);

            Assert.ThrowsException<ArgumentOutOfRangeException>(() => account.Withdraw(100.0M));
        }

        [TestMethod]
        public void Withdraw_Mulithreaded_ReturnsCorrectBalance()
        {
            var account = new Account(0, 200.0M);

            var tasks = new Task[]
            {
                Task.Factory.StartNew(() => account.Withdraw(10.0M)),
                Task.Factory.StartNew(() => account.Withdraw(20.0M)),
                Task.Factory.StartNew(() => account.Withdraw(30.0M)),
                Task.Factory.StartNew(() => account.Withdraw(40.0M))
            };
            Task.WaitAll(tasks);

            Assert.AreEqual(100.0M, account.Balance);
        }

        [TestMethod]
        public void Transactions_AfterMultiple_CorrectCount()
        {
            var account = new Account(0);

            for (var i = 1; i <= 10; i++)
                account.Deposit(i);

            Assert.AreEqual(10, account.Transactions.Count);
        }

        [TestMethod]
        public void TransferTo_PositiveAmount_BothAccountBalancesCorrect()
        {
            var sourceAccount = new Account(0, 100.0M);
            var targetAccount = new Account(0, 100.0M);

            sourceAccount.TransferTo(targetAccount, 50.0M);

            Assert.AreEqual(50.0M, sourceAccount.Balance);
            Assert.AreEqual(150.0M, targetAccount.Balance);
        }

        [TestMethod]
        public void TransferTo_InsufficientBalance_ExceptionThrownBalancesCorrect()
        {
            var sourceAccount = new Account(0, 10.0M);
            var targetAccount = new Account(0, 100.0M);

            Assert.ThrowsException<ArgumentOutOfRangeException>(() => sourceAccount.TransferTo(targetAccount, 50.0M));

            Assert.AreEqual(10.0M, sourceAccount.Balance);
            Assert.AreEqual(100.0M, targetAccount.Balance);
        }

        [TestMethod]
        public void TransferTo_Mulithreaded_ReturnsCorrectBalances()
        {
            var sourceAccount = new Account(100, 100.0M);
            var targetAccount = new Account(200, 100.0M);

            var tasks = new Task[]
            {
                Task.Factory.StartNew(() => sourceAccount.TransferTo(targetAccount, 10.0M)),
                Task.Factory.StartNew(() => sourceAccount.TransferTo(targetAccount, 20.0M)),
                Task.Factory.StartNew(() => sourceAccount.TransferTo(targetAccount, 30.0M)),
                Task.Factory.StartNew(() => sourceAccount.TransferTo(targetAccount, 40.0M))
            };
            Task.WaitAll(tasks);

            Assert.AreEqual(0.0M, sourceAccount.Balance);
            Assert.AreEqual(200.0M, targetAccount.Balance);
        }

        [TestMethod]
        public void DepositWithdrawTransferTo_ComplexTransactionsMulithreaded_ReturnsCorrectBalances()
        {
            var sourceAccount = new Account(100, 1000.0M);
            var targetAccount = new Account(200, 1000.0M);

            var tasks = new Task[]
            {
                Task.Factory.StartNew(() => sourceAccount.Deposit(100.0M)),
                Task.Factory.StartNew(() => sourceAccount.TransferTo(targetAccount, 10.0M)),
                Task.Factory.StartNew(() => targetAccount.Withdraw(100.0M)),
                Task.Factory.StartNew(() => sourceAccount.TransferTo(targetAccount, 20.0M)),
                Task.Factory.StartNew(() => sourceAccount.TransferTo(targetAccount, 30.0M)),
                Task.Factory.StartNew(() => sourceAccount.Withdraw(50.0M)),
                Task.Factory.StartNew(() => sourceAccount.TransferTo(targetAccount, 40.0M))
            };
            Task.WaitAll(tasks);

            Assert.AreEqual(950.0M, sourceAccount.Balance);
            Assert.AreEqual(1000.0M, targetAccount.Balance);
        }
    }
}