using System;
using System.Collections.Generic;
using System.Timers;
using CriminalContact.Entities;

namespace CriminalContact.Services
{
    public class CriminalContactGame : IGame, IDisposable
    {
        private const double TimerInterval = 1000D;

        private readonly IBank _bank;
        private readonly ICollection<Player> _players = new List<Player>();
        private readonly Timer _timer = new Timer(TimerInterval);
        private DateTime _interestLastGenerated;

        public CriminalContactGame(IBank bank)
        {
            Status = GameStatus.Pending;
            _bank = bank;
            _timer.Elapsed += OnTick;
        }

        public GameStatus Status { get; private set; }
        public DateTime? StartTime { get; private set; }
        public DateTime? EndTime { get; private set; }

        public TimeSpan Elapsed =>
            StartTime.HasValue ? (TimeSpan) ((EndTime ?? DateTime.Now) - StartTime) : TimeSpan.Zero;

        public void Begin()
        {
            if (Status != GameStatus.Pending)
                throw new InvalidOperationException("Unable to start a game already in progress or finished");

            StartTime = _interestLastGenerated = DateTime.Now;
            _timer.Start();
            Status = GameStatus.InProgress;
        }

        public void Finish()
        {
            if (Status != GameStatus.InProgress)
                throw new InvalidOperationException("Unable to finish a game not in progress");

            _timer.Stop();
            EndTime = DateTime.Now;
            Status = GameStatus.Finished;
        }

        public Player AddPlayer(string name, decimal startingBalance = 0M)
        {
            var player = new Player(name)
            {
                BankAccount = _bank.OpenAccount(startingBalance)
            };

            _players.Add(player);

            return player;
        }

        private void OnTick(object sender, ElapsedEventArgs e)
        {
            if (DateTime.Now >= _interestLastGenerated.AddSeconds(_bank.InterestIntervalSeconds))
                _bank.GenerateInterest();
        }

        public void Dispose()
        {
            _timer?.Dispose();
        }
    }
}