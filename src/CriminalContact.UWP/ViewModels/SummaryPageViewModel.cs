namespace CriminalContact.UWP.ViewModels
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    using CriminalContact.UWP.Views;

    using Template10.Mvvm;
    using Template10.Services.NavigationService;

    using Windows.ApplicationModel;
    using Windows.UI.Xaml.Navigation;

    public class SummaryPageViewModel : ViewModelBase
    {
        private string gameStatusText = "There is no game currently in progress.";

        public SummaryPageViewModel()
        {
            if (DesignMode.DesignModeEnabled) GameStatusText = "There is no game currently in progress.";
        }

        public string GameStatusText
        {
            get => gameStatusText;
            set => Set(ref gameStatusText, value);
        }

        public void GotoAboutPage()
        {
            NavigationService.Navigate(typeof(SettingsPage));
        }

        public void GotoGamePage()
        {
            NavigationService.Navigate(typeof(DetailPage));
        }

        public void GotoSettingsPage()
        {
            NavigationService.Navigate(typeof(SettingsPage));
        }

        public override async Task OnNavigatedFromAsync(IDictionary<string, object> suspensionState, bool suspending)
        {
            if (suspending) suspensionState[nameof(GameStatusText)] = GameStatusText;
            await Task.CompletedTask;
        }

        public override async Task OnNavigatedToAsync(
            object parameter,
            NavigationMode mode,
            IDictionary<string, object> suspensionState)
        {
            if (suspensionState.Any()) GameStatusText = suspensionState[nameof(GameStatusText)]?.ToString();
            await Task.CompletedTask;
        }

        public override async Task OnNavigatingFromAsync(NavigatingEventArgs args)
        {
            args.Cancel = false;
            await Task.CompletedTask;
        }
    }
}