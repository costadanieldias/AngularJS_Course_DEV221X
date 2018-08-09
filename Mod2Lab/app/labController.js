angular.module('app')
.controller('labController', [
    function() {
        var vm = this;

        vm.person = {
            name: 'Samuel Clemens',
            penName: 'Mark Twain'
        };

        vm.show = function() {
            alert(JSON.stringify(vm.person));
        }
    }
])