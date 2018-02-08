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

    public class MainPageViewModel : ViewModelBase
    {
        private string value = "Gas";

        public MainPageViewModel()
        {
            if (DesignMode.DesignModeEnabled) Value = "Designtime value";
        }

        public string Value
        {
            get => value;
            set => Set(ref this.value, value);
        }

        public void GotoAbout()
        {
            NavigationService.Navigate(typeof(SettingsPage), 2);
        }

        public void GotoDetailsPage()
        {
            NavigationService.Navigate(typeof(DetailPage), Value);
        }

        public void GotoPrivacy()
        {
            NavigationService.Navigate(typeof(SettingsPage), 1);
        }

        public void GotoSettings()
        {
            NavigationService.Navigate(typeof(SettingsPage), 0);
        }

        public override async Task OnNavigatedFromAsync(IDictionary<string, object> suspensionState, bool suspending)
        {
            if (suspending) suspensionState[nameof(Value)] = Value;
            await Task.CompletedTask;
        }

        public override async Task OnNavigatedToAsync(
            object parameter,
            NavigationMode mode,
            IDictionary<string, object> suspensionState)
        {
            if (suspensionState.Any()) Value = suspensionState[nameof(Value)]?.ToString();
            await Task.CompletedTask;
        }

        public override async Task OnNavigatingFromAsync(NavigatingEventArgs args)
        {
            args.Cancel = false;
            await Task.CompletedTask;
        }
    }
}