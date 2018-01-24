namespace CriminalContact.Entities
{
    public class Player
    {
        public Player(string name)
        {
            Name = name;
            IsDead = false;
        }

        public Account BankAccount { get; set; }

        public bool IsDead { get; }

        public string Name { get; }

        public Player Parent { get; set; }

        public PlayerRole Role { get; set; }
    }
}