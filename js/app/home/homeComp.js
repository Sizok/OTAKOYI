(function () {
    function homeCtrl ($timeout, getVacansionNameService, getStatisticService) {
        var ctrl = this;
        ctrl.getVacansionNameService = getVacansionNameService;
        ctrl.getStatisticService = getStatisticService;
        ctrl.base = {};
        ctrl.vacansion = [];
        ctrl.statistic = [];
        ctrl.statisticBase;

        ctrl.$onInit = function() {
                ctrl.base = ctrl.baseVacansies;
                ctrl.vacansion = ctrl.getVacansionNameService.getVacansionName(ctrl.base);
          };
        
        ctrl.getStatistic = function () {
            ctrl.statisticBase = ctrl.getStatisticService.getStatistic(ctrl.base, ctrl.statistic);
            debugger;
        }
    }

    homeCtrl.$inject = ['$timeout', 'getVacansionNameService', 'getStatisticService'];

    angular.module('otakoyi')
        .component('homePage', {
            templateUrl: 'js/app/home/homePage.html',
            bindings: {
                baseVacansies: '<'
           },
            controller: homeCtrl
        });
})();
