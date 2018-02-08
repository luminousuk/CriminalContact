namespace CriminalContact.UWP.Converters
{
    using System;

    using Windows.UI.Xaml.Data;

    public class DoubleToStringConverter : IValueConverter
    {
        public object Convert(object value, Type targetType, object parameter, string language)
        {
            return ((double)value).ToString("F1");
        }

        public object ConvertBack(object value, Type targetType, object parameter, string language)
        {
            return double.TryParse(value.ToString(), out var output) ? output : 0;
        }
    }
}