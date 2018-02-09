namespace CriminalContact.UWP.ViewModels
{
    using Template10.Mvvm;

    public class SettingsPageViewModel : ViewModelBase
    {
        public SettingsAboutPartViewModel SettingsAboutPartViewModel { get; } = new SettingsAboutPartViewModel();

        public SettingsBankingPartViewModel SettingsBankingPartViewModel { get; } = new SettingsBankingPartViewModel();

        public SettingsGamePartViewModel SettingsGamePartViewModel { get; } = new SettingsGamePartViewModel();

        public SettingsRolesPartViewModel SettingsRolesPartViewModel { get; } = new SettingsRolesPartViewModel();
    }
}