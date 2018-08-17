angular.module('app')
.controller('ContactUsController', [
    function() {
        var vm = this;
        vm.sendMessage = function() {
            alert('Contact Sent');
        };
    }
])