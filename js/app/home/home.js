(function () {
    angular.module('otakoyi.home', [])
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider.state('home', {
                url: '/',
                template: '<home-page base-vacansies="$resolve.vacansies"></home-page>',
                templateUrl: 'js/app/home/homePage.html',
                data: {
                    pageTitle: 'Home'
                },
                resolve: {
                    vacansies: ['getVacansiesService', function (getVacansiesService) {
                        var baseVacansies = getVacansiesService.getBase();
                        return baseVacansies;
                    }]
                }
              })
          }])
  })();
