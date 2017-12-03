(function() {
  'use strict';

  angular
    .module('test')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'mainVm'
      });
    $stateProvider
      .state('search', {
        url: '/search/:query',
        templateUrl: 'app/search/search.html',
        controller: 'SearchController',
        controllerAs: 'searchVm'
      });


    $urlRouterProvider.otherwise('/');
  }

})();
