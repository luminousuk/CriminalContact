namespace CriminalContact.Entities
{
    public class Player
    {
        public Player(string name)
        {
            Name = name;
            IsDead = false;
        }

        public string Name { get; }
        public Account BankAccount { get; set; }
        public bool IsDead { get; }
        public Player Parent { get; set; }
    }
}