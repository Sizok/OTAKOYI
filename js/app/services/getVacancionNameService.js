(function () {
    function getVacansionNameService() {
        var factory = {};

        factory.getVacansionName = function (baseVacansion) {

            var vacansionNameBase = Object.keys(baseVacansion);
            return vacansionNameBase;
        };

        return factory;
    }

    getVacansionNameService.$inject = [];
    angular.module('getVacansionName.Service', []).factory('getVacansionNameService', getVacansionNameService);
})();