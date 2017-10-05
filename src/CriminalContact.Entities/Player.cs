namespace CriminalContact.Entities
{
    public class Player
    {
        public Player(string name, int accountNumber)
        {
            Name = name;
            BankAccount = new Account(this, accountNumber);
            IsDead = false;
        }

        public string Name { get; }
        public Account BankAccount { get; set; }
        public bool IsDead { get; }
        public Player Parent { get; set; }
    }
}