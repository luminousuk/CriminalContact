namespace CriminalContact.UWP.ViewModels
{
    using CriminalContact.UWP.Services.SettingsServices;

    using Template10.Mvvm;

    using Windows.ApplicationModel;

    public class SettingsBankingPartViewModel : ViewModelBase
    {
        private readonly SettingsService settings;

        public SettingsBankingPartViewModel()
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

        public int InterestInterval
        {
            get => settings.BankingInterestIntervalMins;
            set
            {
                settings.BankingInterestIntervalMins = value;
                RaisePropertyChanged();
            }
        }

        public int InterestPercentage
        {
            get => settings.BankingInterestPercentage;
            set
            {
                settings.BankingInterestPercentage = value;
                RaisePropertyChanged();
            }
        }

        public bool IsInterestEnabled
        {
            get => settings.IsBankingInterestEnabled;
            set
            {
                settings.IsBankingInterestEnabled = value;
                RaisePropertyChanged();
            }
        }
    }
}