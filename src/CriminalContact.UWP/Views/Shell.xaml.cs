namespace CriminalContact.UWP.Views
{
    using CriminalContact.UWP.Services.SettingsServices;

    using Template10.Controls;
    using Template10.Services.NavigationService;

    using Windows.UI.Xaml.Controls;

    public sealed partial class Shell : Page
    {
        private readonly SettingsService settings;

        public Shell()
        {
            Instance = this;
            InitializeComponent();
            settings = SettingsService.Instance;
        }

        public Shell(INavigationService navigationService)
            : this()
        {
            SetNavigationService(navigationService);
        }

        public static HamburgerMenu HamburgerMenu => Instance.MyHamburgerMenu;

        public static Shell Instance { get; set; }

        public void SetNavigationService(INavigationService navigationService)
        {
            MyHamburgerMenu.NavigationService = navigationService;
            HamburgerMenu.RefreshStyles(settings.AppTheme, true);
        }
    }
}