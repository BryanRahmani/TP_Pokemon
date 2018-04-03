'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './pokemon.routes';

export class PokemonComponent {
  pokemons_liste = [];

  /*@ngInject*/
  constructor($scope, pokemons, Auth, $cookies) {
    'ngInject';
    this.pokemons = pokemons;
    this.$scope = $scope;
    var user = Auth.getCurrentUserSync();
    //$cookies.put('userid', user._id);
    //$cookies.getObject('userid');
  }


  $onInit() {
    this.pokemons.query().$promise.then(data => this.pokemons_liste = data);
    this.listePoke = true;
    this.detPoke = false;
  }

  showInfos(pokemon) {
    console.log(pokemon);
    this.info = pokemon;
    this.listePoke = false;
    this.detPoke = true;
  }


  addCollection(pokemon) {
    console.log(pokemon);
  }
}

export default angular.module('tpfullAngular2App.pokemon', [uiRouter])
  .config(routes)
  .component('pokemon', {
    template: require('./pokemon.html'),
    controller: PokemonComponent,
    controllerAs: 'pokemonCtrl'
  })
  .name;
