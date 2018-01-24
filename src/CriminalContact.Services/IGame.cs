namespace CriminalContact.Services
{
    using System;

    using CriminalContact.Entities;

    public interface IGame
    {
        TimeSpan Elapsed { get; }

        DateTime? EndTime { get; }

        DateTime? StartTime { get; }

        GameStatus Status { get; }

        Player AddPlayer(string name, decimal startingBalance);

        void Begin();

        void Finish();
    }
}