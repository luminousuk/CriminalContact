namespace CriminalContact.UWP.ViewModels
{
    using System.Collections.ObjectModel;
    using System.Windows.Input;

    using Template10.Mvvm;

    public class SettingsRolesPartViewModel : ViewModelBase
    {
        public ICommand AddRoleCommand => new DelegateCommand(AddRole);

        public ObservableCollection<PlayerRoleViewModel> PlayerRoleViewModels { get; } =
            new ObservableCollection<PlayerRoleViewModel>
                {
                    new PlayerRoleViewModel
                        {
                            Name = "Mayor",
                            FinalBonus = 100M,
                            FinalBalanceMultiplier = 1.2M
                        },
                    new PlayerRoleViewModel
                        {
                            Name = "Undertaker",
                            FinalBonus = 200M,
                            FinalBalanceMultiplier = 1.1M
                        }
                };

        public ICommand RemoveRoleCommand => new DelegateCommand<PlayerRoleViewModel>(RemoveRole);

        private void AddRole()
        {
            var role = new PlayerRoleViewModel { Name = "New Role", FinalBalanceMultiplier = 1M, FinalBonus = 0M };
            PlayerRoleViewModels.Add(role);
            RaisePropertyChanged();
        }

        private void RemoveRole(PlayerRoleViewModel role)
        {
            PlayerRoleViewModels.Remove(role);
            RaisePropertyChanged();
        }
    }
}