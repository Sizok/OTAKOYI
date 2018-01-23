(function () {
    function getStatisticService() {
        var factory = {};

        factory.getStatistic = function (base, vacansionBase) {
            var statisticBase = [];
            var statusticBaseView = [];
            for(var i = 0; i < vacansionBase.length; i++){
                if(vacansionBase[i].number > 0){
                    var key = vacansionBase[i].name;
                    var keyNumber = vacansionBase[i].number;
                    var vacansies = {};
                    vacansies.name = key;
                    vacansies.number = keyNumber;
                    statisticBase.push(vacansies);
                }
            }
            for(var k=0; k < statisticBase.length; k++){

                var newKey = statisticBase[k].name;
                var vacansiesNumber = statisticBase[k].number;
                var vacansiesSkills = base[newKey];
                var skillKeys = Object.keys(vacansiesSkills);
                    for(var j = 0; j <skillKeys.length; j++){
                        var skills = {};
                        var skillKey = skillKeys[j];
                        skills.name = skillKey;
                        skills.number = vacansiesSkills[skillKey]*vacansiesNumber;
                        statusticBaseView.push(skills);
                    }

            }
            for(var y = 0; y < statusticBaseView.length; y++){
                var comparisonVarible = statusticBaseView[y];
                for (var z = y + 1; z < statusticBaseView.length; z++){
                    if(comparisonVarible.name === statusticBaseView[z].name){
                        statusticBaseView[y].number = comparisonVarible.number + statusticBaseView[z].number;
                        statusticBaseView.splice(z, 1);
                    }
                }
            }
            statusticBaseView.sort(function(a, b) { return b.number - a.number });

            return statusticBaseView;
        };


        return factory;
    }

    getStatisticService.$inject = [];
    angular.module('getStatistic.Service', []).factory('getStatisticService', getStatisticService);
})();