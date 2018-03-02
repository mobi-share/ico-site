export default class CoreRoutes {
    public static Register($stateProvider: ng.ui.IStateProvider) {
        
        $stateProvider.state('home', {
            url: '/',
            component: 'homeComponent'
        });

        $stateProvider.state('privacy', {
            url: '/privacy',
            component: 'privacyComponent'
        });
    }
}