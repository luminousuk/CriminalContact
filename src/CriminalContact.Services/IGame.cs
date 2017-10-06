using System;
using CriminalContact.Entities;

namespace CriminalContact.Services
{
    public interface IGame
    {
        GameStatus Status { get; }
        DateTime? StartTime { get; }
        DateTime? EndTime { get; }
        TimeSpan Elapsed { get; }
        Player AddPlayer(string name, decimal startingBalance);
        void Begin();
        void Finish();
    }
}