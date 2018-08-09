angular.module('app')
.directive('h3Directive', [
    function() {
        return {
            scope: {
                title: '@'
            },
            restrict: 'E',
            replace: true,
            template: '<h3>{{title}}</h3>',
            link: function(scope, elem, attrs) {
                elem.bind('mouseenter', function() {
                    elem.css('background-color', 'red')
                });
                elem.bind('mouseleave', function() {
                    elem.css('background-color', 'silver')
                });
            }
        };
    }
])