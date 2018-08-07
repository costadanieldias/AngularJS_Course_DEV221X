/*angular.module('app').factory('sessionFactory', ['$window', sessionFactory]);
function sessionFactory($window) {
    return {
        save: save,
        get: get,
        clear: clear
    }

    function save(key, value) {
        $window.sessionStorage.setItem(key, value);
    }

    function get(key) {
        return $window.sessionStorage.getItem(key);
    }

    function clear() {
        $window.sessionStorage.clear();
    }
}*/
angular.module('app').factory('sessionFactory', [
    '$window',
    'formattingFactory',
    function($window, formattingFactory) {
        return {
            save: function(key, value) {
                $window.sessionStorage.setItem(key, formattingFactory.format(value));
            },
            get: function(key) {
                return $window.sessionStorage.getItem(key);
            },
            clear: function() {
                $window.sessionStorage.clear();
            }
        }
    }

])