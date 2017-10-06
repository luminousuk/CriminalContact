using System.Threading;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;

namespace CriminalContact.Services.Tests
{
    [TestClass]
    public class CriminalContactGameTests
    {
        [TestMethod]
        public void Begin_WithInterestInterval_GeneratesInterest()
        {
            var mockBank = new Mock<IBank>();
            mockBank.Setup(x => x.InterestIntervalSeconds).Returns(1);
            mockBank.Setup(x => x.GenerateInterest());

            var game = new CriminalContactGame(mockBank.Object);

            game.Begin();

            Thread.Sleep(2000);

            game.Finish();

            mockBank.Verify(x => x.GenerateInterest(), Times.AtLeastOnce);
        }

        [TestMethod]
        public void CriminalContactGame_UponInstantiation_PendingStatus()
        {
            var mockBank = new Mock<IBank>();

            var game = new CriminalContactGame(mockBank.Object);

            Assert.AreEqual(GameStatus.Pending, game.Status);
        }

        [TestMethod]
        public void CriminalContactGame_AfterBegin_InProgressStatus()
        {
            var mockBank = new Mock<IBank>();

            var game = new CriminalContactGame(mockBank.Object);

            game.Begin();

            Assert.AreEqual(GameStatus.InProgress, game.Status);

            game.Finish();
        }

        [TestMethod]
        public void CriminalContactGame_AfterFinish_FinishedStatus()
        {
            var mockBank = new Mock<IBank>();

            var game = new CriminalContactGame(mockBank.Object);

            game.Begin();
            game.Finish();

            Assert.AreEqual(GameStatus.Finished, game.Status);
        }
    }
}