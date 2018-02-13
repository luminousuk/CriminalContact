namespace CriminalContact.Entities
{
    using System;

    public class PlayerRole : IEquatable<PlayerRole>
    {
        public PlayerRole(string name, decimal bonus, decimal multiplier)
        {
            Name = name;
            Bonus = bonus;
            Multiplier = multiplier;
        }

        public string Name { get; }

        public decimal Bonus { get; }

        public decimal Multiplier { get; }

        public static bool operator ==(PlayerRole p1, PlayerRole p2)
        {
            return p1 != null && p1.Equals(p2);
        }

        public static bool operator !=(PlayerRole p1, PlayerRole p2)
        {
            return p1 == null || !p1.Equals(p2);
        }

        public bool Equals(PlayerRole other)
        {
            return string.Equals(Name, other.Name);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            return obj is PlayerRole role && Equals(role);
        }

        public override int GetHashCode()
        {
            return Name != null ? Name.GetHashCode() : 0;
        }
    }
}