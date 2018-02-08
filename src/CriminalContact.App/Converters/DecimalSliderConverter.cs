namespace CriminalContact.UWP.Converters
{
    using System;

    using Windows.UI.Xaml.Data;

    public class DecimalSliderConverter : IValueConverter
    {
        public object Convert(object value, Type targetType, object parameter, string language)
        {
            return System.Convert.ToDouble(value);
        }

        public object ConvertBack(object value, Type targetType, object parameter, string language)
        {
            return System.Convert.ToDecimal(value);
        }
    }
}