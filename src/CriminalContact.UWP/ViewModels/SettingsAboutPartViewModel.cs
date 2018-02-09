namespace CriminalContact.UWP.ViewModels
{
    using System;

    using Template10.Mvvm;

    using Windows.ApplicationModel;

    public class SettingsAboutPartViewModel : ViewModelBase
    {
        public string DisplayName => Package.Current.DisplayName;

        public Uri Logo => Package.Current.Logo;

        public string Publisher => Package.Current.PublisherDisplayName;

        public string Version
        {
            get
            {
                var v = Package.Current.Id.Version;
                return $"{v.Major}.{v.Minor}.{v.Build}.{v.Revision}";
            }
        }
    }
}