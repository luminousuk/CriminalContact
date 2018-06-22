namespace CriminalContact.UWP.Services.GameService
{
    public struct GameConfiguration
    {
        public decimal InterestPct { get; set; }

        public int InterestIntervalSeconds { get; set; }

        public bool InterestEnabled { get; set; }
    }
}