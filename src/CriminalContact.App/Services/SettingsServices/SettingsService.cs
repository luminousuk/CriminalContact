namespace CriminalContact.UWP.Services.SettingsServices
{
    using System;

    using CriminalContact.UWP.Views;

    using Template10.Common;
    using Template10.Services.SettingsService;
    using Template10.Utils;

    using Windows.UI.Xaml;

    public class SettingsService
    {
        private readonly ISettingsHelper helper;

        private SettingsService()
        {
            helper = new SettingsHelper();
        }

        public static SettingsService Instance { get; } = new SettingsService();

        public ApplicationTheme AppTheme
        {
            get
            {
                var theme = ApplicationTheme.Light;
                var value = helper.Read(nameof(AppTheme), theme.ToString());
                return Enum.TryParse(value, out theme) ? theme : ApplicationTheme.Dark;
            }

            set
            {
                helper.Write(nameof(AppTheme), value.ToString());
                ((FrameworkElement)Window.Current.Content).RequestedTheme = value.ToElementTheme();
                Shell.HamburgerMenu.RefreshStyles(value, true);
            }
        }

        public TimeSpan CacheMaxDuration
        {
            get => helper.Read(nameof(CacheMaxDuration), TimeSpan.FromDays(2));
            set
            {
                helper.Write(nameof(CacheMaxDuration), value);
                BootStrapper.Current.CacheMaxDuration = value;
            }
        }

        public int GameDuration
        {
            get => helper.Read(nameof(GameDuration), 360);
            set => helper.Write(nameof(GameDuration), value);
        }

        public bool IsBankingInterestEnabled
        {
            get => helper.Read(nameof(IsBankingInterestEnabled), true);
            set => helper.Write(nameof(IsBankingInterestEnabled), value);
        }

        public int BankingInterestIntervalMins
        {
            get => helper.Read(nameof(BankingInterestIntervalMins), 60);
            set => helper.Write(nameof(BankingInterestIntervalMins), value);
        }

        public int BankingInterestPercentage
        {
            get => helper.Read(nameof(BankingInterestPercentage), 10);
            set => helper.Write(nameof(BankingInterestPercentage), value);
        }
    }
}