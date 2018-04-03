const angular = require('angular');

import ngResource from 'angular-resource';

/*@ngInject*/
export function pokemonsService($resource) {
    'ngInject';
    // AngularJS will instantiate a singleton by calling "new" on this function
    return $resource('https://api.pokemontcg.io/v1/cards', { id: '@_id'
        }, {
            update: {
                method: 'GET'
            }
        });
}

export default angular.module('tpfullAngular2App.pokemons', [ngResource])
  .service('pokemons', pokemonsService)
  .name;
