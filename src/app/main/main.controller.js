(function() {
  'use strict';

  angular
    .module('test')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($state) {
    var vm = this;

    vm.query = "";

    vm.search = function(query) {
      if (query !== "") {
        $state.go("search", {
          query: query
        })
      }
    };
  }
})();
