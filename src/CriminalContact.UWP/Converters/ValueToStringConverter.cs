namespace CriminalContact.UWP.Converters
{
    using System;

    using Windows.UI.Xaml.Data;

    public sealed class ValueToStringConverter : IValueConverter
    {
        public object Convert(object value, Type targetType, object parameter, string language)
        {
            return value?.ToString();
        }

        public object ConvertBack(object value, Type targetType, object parameter, string language)
        {
            throw new NotImplementedException("Converting from string is not supported.");
        }
    }
}