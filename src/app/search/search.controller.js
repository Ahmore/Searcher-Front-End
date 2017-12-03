(function() {
  'use strict';

  angular
    .module('test')
    .controller('SearchController', SearchController);

  /** @ngInject */
  function SearchController($state, $stateParams, $http, SearchService) {
    var vm = this;

    vm.results = [];
    vm.time = 0;

    vm.init = function() {
      var query = $stateParams.query;

      if (query !== "") {
        SearchService.get({
          query: query,
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
