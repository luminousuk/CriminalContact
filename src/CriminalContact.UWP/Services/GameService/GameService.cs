namespace CriminalContact.UWP.Services.GameService
{
    using System;

    using CriminalContact.Services;

    public class GameService
    {
        private CriminalContactGame game;

        private GameService()
        {
        }

        public static GameService Instance { get; } = new GameService();

        public void NewGame(GameConfiguration configuration)
        {
            if (game != null && game.Status == GameStatus.InProgress)
                throw new InvalidOperationException("Unable to start game. Game already in progress.");

            var bank = new Bank { InterestPct = configuration.InterestPct };

            game = new CriminalContactGame(bank)
                       {
                           InterestIntervalSeconds = configuration.InterestIntervalSeconds,
                           InterestEnabled = configuration.InterestEnabled
                       };
        }
    }
}