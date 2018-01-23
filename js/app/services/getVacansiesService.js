(function () {
    function getVacansiesService($http) {
        var factory = {};

        factory.getBase = function(){
            return $http.get('js/base.json').then(function(result){
                return result.data.letVacansies;
            });
        };


        return factory;
    }

    getVacansiesService.$inject = ['$http'];
    angular.module('getVacansies.Service', []).factory('getVacansiesService', getVacansiesService);
})();