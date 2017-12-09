(function() {
  'use strict';

  angular
    .module('test')
    .controller('SearchController', SearchController);

  /** @ngInject */
  function SearchController($state, $stateParams, SearchService) {
    var vm = this;

    vm.results = [];
    vm.time = 0;
    vm.query = "";

    vm.init = function() {
      vm.query = $stateParams.query;

      if (vm.query !== "") {
        SearchService.get({
          query: vm.query,
          n: 10
        }).$promise.then(function(results) {
          vm.results = results.results;
          vm.time = results.time;
        });
      }
      else {
        $state.go("main")
      }
    };

    vm.init();
  }
})();
