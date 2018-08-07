angular.module('app').factory('formattingFactory', [
    function() {
        return {
            format: function(text) {
                if(text.length % 2 == 0)
                    return text.toUpperCase();
                else
                    return text.toLowerCase();
            }
        }
    }
])