namespace CriminalContact.UWP.ViewModels
{
    using CriminalContact.UWP.Services.SettingsServices;

    using Template10.Mvvm;

    using Windows.ApplicationModel;
    using Windows.UI.Xaml;

    public class SettingsGamePartViewModel : ViewModelBase
    {
        private readonly SettingsService settings;

        public SettingsGamePartViewModel()
        {
            if (DesignMode.DesignModeEnabled)
            {
                // designtime
            }
            else
            {
                settings = SettingsService.Instance;
            }
        }

        public bool IsNightModeTheme
        {
            get => settings.AppTheme.Equals(ApplicationTheme.Dark);
            set
            {
                settings.AppTheme = value ? ApplicationTheme.Dark : ApplicationTheme.Light;
                RaisePropertyChanged();
            }
        }
    }
}