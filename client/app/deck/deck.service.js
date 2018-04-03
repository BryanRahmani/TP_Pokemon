'use strict';
const angular = require('angular');

import ngResource from 'angular-resource';

/*@ngInject*/
export function deckService() {
    'ngInject';
    // AngularJS will instantiate a singleton by calling "new" on this function
    return $resource('/api/deck', { id: '@_id'
        }, {
            update: {
                method: 'GET'
            }
        });
}

export default angular.module('tpfullAngular2App.deck', [ngResource])
  .service('deck', deckService)
  .name;
