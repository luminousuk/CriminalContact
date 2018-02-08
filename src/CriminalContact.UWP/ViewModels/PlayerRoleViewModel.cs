namespace CriminalContact.UWP.ViewModels
{
    using Template10.Mvvm;

    public class PlayerRoleViewModel : ViewModelBase
    {
        private decimal finalBalanceMultiplier;

        private decimal finalBonus;

        private string name;

        public decimal FinalBalanceMultiplier
        {
            get => finalBalanceMultiplier;
            set
            {
                finalBalanceMultiplier = value;
                RaisePropertyChanged();
            }
        }

        public decimal FinalBonus
        {
            get => finalBonus;
            set
            {
                finalBonus = value;
                RaisePropertyChanged();
            }
        }

        public string Name
        {
            get => name;
            set
            {
                name = value;
                RaisePropertyChanged();
            }
        }
    }
}