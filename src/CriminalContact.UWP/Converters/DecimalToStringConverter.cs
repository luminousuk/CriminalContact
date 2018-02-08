namespace CriminalContact.UWP.Converters
{
    using System;

    using Windows.UI.Xaml.Data;

    public class DecimalToStringConverter : IValueConverter
    {
        public object Convert(object value, Type targetType, object parameter, string language)
        {
            return ((decimal)value).ToString("F1");
        }

        public object ConvertBack(object value, Type targetType, object parameter, string language)
        {
            return decimal.TryParse(value.ToString(), out var output) ? output : 0;
        }
    }
}