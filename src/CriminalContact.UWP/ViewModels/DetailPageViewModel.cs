namespace CriminalContact.UWP.ViewModels
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using Template10.Mvvm;
    using Template10.Services.NavigationService;

    using Windows.ApplicationModel;
    using Windows.UI.Xaml.Navigation;

    public class DetailPageViewModel : ViewModelBase
    {
        private string value = "Default";

        public DetailPageViewModel()
        {
            if (DesignMode.DesignModeEnabled) Value = "Designtime value";
        }

        public string Value
        {
            get => value;
            set => Set(ref this.value, value);
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
            Value = suspensionState.ContainsKey(nameof(Value))
                        ? suspensionState[nameof(Value)]?.ToString()
                        : parameter?.ToString();
            await Task.CompletedTask;
        }

        public override async Task OnNavigatingFromAsync(NavigatingEventArgs args)
        {
            args.Cancel = false;
            await Task.CompletedTask;
        }
    }
}