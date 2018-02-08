namespace CriminalContact.UWP.Converters
{
    using System;

    using Windows.UI.Xaml.Data;

    public class MinutesToDurationStringConverter : IValueConverter
    {
        public object Convert(object value, Type targetType, object parameter, string language)
        {
            var minutes = System.Convert.ToInt32(value);
            return minutes < 60 ? $"{minutes}m" : $"{minutes / 60}h {minutes % 60}m";
        }

        public object ConvertBack(object value, Type targetType, object parameter, string language)
        {
            throw new NotImplementedException("Converting from string is not supported.");
        }
    }
}