import * as moment from 'moment';
import { ILocationProvider } from 'angular';

function configure(
    $mdThemingProvider: ng.material.IThemingProvider,
    $mdDateLocaleProvider: ng.material.IDateLocaleProvider,
    $locationProvider: ILocationProvider,
    ChartJsProvider
) {

    const dateFormat = "DD/MM/YYYY";

    // Mobishare theme
    $mdThemingProvider.definePalette('mobiPrimaryPalette', {
        '50': 'e8eaf6',
        '100': 'ccddff',
        '200': '99bbff',
        '300': '80aaff',
        '400': '3377ff',
        '500': '0052F3',
        '600': '004de6',
        '700': '0044cc',
        '800': '003cb3',
        '900': '002b80',
        'A100': '4da6ff',
        'A200': '1a8cff',
        'A400': '007af5',
        'A700': '0066cc',
        'contrastDefaultColor': 'light',
        'contrastDarkColors': ['50', '100',
        '200', '300', '400', 'A100'],
        'contrastLightColors': undefined
    });

    // Angular material theme configuration
    $mdThemingProvider.theme('default')
        .primaryPalette('mobiPrimaryPalette')
        .accentPalette('cyan', {
            'default': '500' // use shade 200 for default, and keep all other shades the same
        });

    // Angular material datepicker configuration    
    $mdDateLocaleProvider.formatDate = function (date) {
        return date ? moment(date).format(dateFormat) : '';
    };

    $mdDateLocaleProvider.parseDate = function (dateString) {
        var m = moment(dateString, dateFormat, true);
        return m.isValid() ? m.toDate() : new Date(NaN);
    };

    ChartJsProvider.setOptions({
        chartColors: ['#3F51B5', '#3661BA', '#2976C0', '#1C8CC6', '#10A1CC', '#03B7D2'],
        responsive: true
    });

    $locationProvider.html5Mode(true);
}

configure.$inject = ['$mdThemingProvider', '$mdDateLocaleProvider', '$locationProvider', 'ChartJsProvider'];

export default configure;