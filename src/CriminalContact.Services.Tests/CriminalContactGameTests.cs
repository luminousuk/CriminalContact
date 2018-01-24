namespace CriminalContact.Services.Tests
{
    using System.Threading;

    using Microsoft.VisualStudio.TestTools.UnitTesting;

    using Moq;

    [TestClass]
    public class CriminalContactGameTests
    {
        [TestMethod]
        public void BeginWithInterestIntervalGeneratesInterest()
        {
            var mockBank = new Mock<IBank>();
            mockBank.Setup(x => x.GenerateInterest());

            var game = new CriminalContactGame(mockBank.Object) { InterestIntervalSeconds = 1 };

            game.Begin();

            Thread.Sleep(2000);

            game.Finish();

            mockBank.Verify(x => x.GenerateInterest(), Times.AtLeastOnce);
        }

        [TestMethod]
        public void CriminalContactGameUponInstantiationPendingStatus()
        {
            var mockBank = new Mock<IBank>();

            var game = new CriminalContactGame(mockBank.Object);

            Assert.AreEqual(GameStatus.Pending, game.Status);
        }

        [TestMethod]
        public void CriminalContactGameAfterBeginInProgressStatus()
        {
            var mockBank = new Mock<IBank>();

            var game = new CriminalContactGame(mockBank.Object);

            game.Begin();

            Assert.AreEqual(GameStatus.InProgress, game.Status);

            game.Finish();
        }

        [TestMethod]
        public void CriminalContactGameAfterFinishFinishedStatus()
        {
            var mockBank = new Mock<IBank>();

            var game = new CriminalContactGame(mockBank.Object);

            game.Begin();
            game.Finish();

            Assert.AreEqual(GameStatus.Finished, game.Status);
        }
    }
}