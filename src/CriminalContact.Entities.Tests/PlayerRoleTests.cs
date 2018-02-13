namespace CriminalContact.Entities.Tests
{
    using Microsoft.VisualStudio.TestTools.UnitTesting;

    [TestClass]
    public class PlayerRoleTests
    {
        [TestMethod]
        public void ConstructorSetsAllProperties()
        {
            const string RoleName = "role";
            const decimal RoleBonus = 100M;
            const decimal RoleMultiplier = 1.5M;

            var role = new PlayerRole(RoleName, RoleBonus, RoleMultiplier);

            Assert.AreEqual(RoleName, role.Name);
            Assert.AreEqual(RoleBonus, role.Bonus);
            Assert.AreEqual(RoleMultiplier, role.Multiplier);
        }

        [TestMethod]
        public void EqualityOperatorUsesName()
        {
            var role1 = new PlayerRole("role1", 100M, 1.5M);
            var role2 = new PlayerRole("role2", 100M, 1.5M);
            var role3 = new PlayerRole("role1", 200M, 2.5M);

            Assert.AreNotEqual(role1, role2);
            Assert.AreEqual(role1, role3);
        }
    }
}