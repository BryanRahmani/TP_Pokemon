import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';


export class MainController {

  pokemons_liste = [];

  /*@ngInject*/
  constructor($scope, pokemons) {
    'ngInject';
  }


  $onInit() {
  }

}

export default angular.module('tpfullAngular2App.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController,
    controllerAs: 'PokCtrl'
  })
  .name;
