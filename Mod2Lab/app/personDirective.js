angular.module('app')
.directive('person', [
    function() {
        return {
            scope: {
                person: '=',
                action: '&'
            },
            restrict: 'E',
            template: '<div class="row">' +
                        '<div class="col-sm-3">' +
                            '<b>{{person.name}}</b>' +
                        '</div>' +
                        '<div class="col-sm-3">' +
                            '{{person.nationality}}' +
                        '</div>' +
                        '<div class="col-sm-3">' +
                            '{{person.dates}}' +
                        '</div>' +
                        '<div class="col-sm-3"><input type="button" ng-click="action()" value="Details" class="btn btn-primary"/></div>' +
                      '</div>',
            replace: true,
            link: function(scope, elem, attrs) {
                        elem.bind('mouseenter', function() {
                            elem.css('background-color', 'silver')
                        });
                        elem.bind('mouseleave', function() {
                            elem.css('background-color', 'white')
                        });
                    }
        };
    }
])