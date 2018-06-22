namespace CriminalContact.Services
{
    using System;
    using System.Collections.Generic;
    using System.Timers;

    using CriminalContact.Entities;

    public class CriminalContactGame : IGame, IDisposable
    {
        private const double TimerInterval = 1000D;

        private readonly IBank bank;

        private readonly ICollection<Player> players = new List<Player>();

        private readonly Timer timer = new Timer(TimerInterval);

        private DateTime interestLastGenerated;

        public CriminalContactGame(IBank bank)
        {
            this.bank = bank;
            timer.Elapsed += OnTick;
        }

        public TimeSpan Elapsed =>
            StartTime.HasValue ? (TimeSpan)((EndTime ?? DateTime.Now) - StartTime) : TimeSpan.Zero;

        public DateTime? EndTime { get; private set; }

        public bool InterestEnabled { get; set; }

        public int InterestIntervalSeconds { get; set; } = 60 * 60; // 1 hour

        public DateTime? StartTime { get; private set; }

        public GameStatus Status { get; private set; } = GameStatus.Pending;

        public Player AddPlayer(string name, decimal startingBalance = 0M)
        {
            var player = new Player(name) { BankAccount = bank.OpenAccount(startingBalance) };

            players.Add(player);

            return player;
        }

        public void Begin()
        {
            if (Status != GameStatus.Pending)
                throw new InvalidOperationException("Unable to start a game already in progress or finished");

            StartTime = interestLastGenerated = DateTime.Now;
            timer.Start();
            Status = GameStatus.InProgress;
        }

        public void Dispose()
        {
            timer?.Dispose();
        }

        public void Finish()
        {
            if (Status != GameStatus.InProgress)
                throw new InvalidOperationException("Unable to finish a game not in progress");

            timer.Stop();
            EndTime = DateTime.Now;
            Status = GameStatus.Finished;
        }

        private void OnTick(object sender, ElapsedEventArgs e)
        {
            if (InterestEnabled && DateTime.Now >= interestLastGenerated.AddSeconds(InterestIntervalSeconds))
                bank.GenerateInterest();
        }
    }
}