(function() {
  'use strict';

  angular
    .module('test')
    .factory('SearchService', SearchService);

  /** @ngInject */
  function SearchService($resource, API_URL, $log) {
    function getData(response) {
      return response.data;
    }

    function getError(error) {
      $log.error(error);
      $log.error(error.status);

      return error.data;
    }

    var config  = {
      headers: {
        'Content-Type' : 'application/json'
      }
    };

    return $resource(API_URL + 'search/:query/:n', {}, config);
  }
})();
