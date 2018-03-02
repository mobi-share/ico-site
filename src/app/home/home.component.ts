import { IComponentController, IComponentOptions } from 'angular';
import { StateService } from 'angular-ui-router';
import './home.styles.scss';

export class HomeController implements IComponentController {

    private chart: any;
    
    static $inject = ['$scope', '$state', '$http', '$mdToast'];
    constructor(
        private $scope: Core.IVmScope,
        private $state: StateService
    ) {
        this.$scope.vm = this;
        this.setupChart();
    }

    $onInit() {}

    goTo(state: string) {
        this.$state.go(state);
    }

    private setupChart() {
        this.chart  = {
            data: [50, 15, 20, 15],
            labels: ['Public Sale', 'Private Sale', 'Team and Advisors', 'Other'],
            options: {
                legend: {
                    display: true,
                    position: 'bottom',
                    fullWidth: true
                },
            }
        };
    }
}

const homeComponent: IComponentOptions = {
    controller: HomeController,
    template: require('./home.html') as string
};

export default homeComponent;