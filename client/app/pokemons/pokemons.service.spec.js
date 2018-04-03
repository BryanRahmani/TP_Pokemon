'use strict';

describe('Service: pokemons', function() {
  // load the service's module
  beforeEach(module('tpfullAngular2App.pokemons'));

  // instantiate service
  var pokemons;
  beforeEach(inject(function(_pokemons_) {
    pokemons = _pokemons_;
  }));

  it('should do something', function() {
    expect(!!pokemons).toBe(true);
  });
});
