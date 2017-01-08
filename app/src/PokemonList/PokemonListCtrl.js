'use strict';

pokemonApp.controller('PokemonListCtrl', function($scope,$q, PokemonsService, BerriesService) {

    // PokemonsService.getPokemons().then(function(response) {
    //     $scope.pokemons = response.data.results;
    // });
    //
    // BerriesService.getBerries().then(function(response) {
    //     $scope.berries = response.data.results;
    // });
    $scope.loading = true;

    // PokemonsService.getPokemons().then(function(response) {
    //     $scope.pokemons = response.data.results;
    //
    //     return BerriesService.getBerries()
    // }).then(function(response) {
    //     $scope.berries = response.data.results;
    //     $scope.loading = false;
    // });


    var obj1,obj2;

    obj1 =PokemonsService.getPokemons();
    obj2 = BerriesService.getBerries();

    $q.all(
        [obj1,obj2]
    ).then(function(values){

        $scope.pokemons =values[0].data.results;
        $scope.berries = values[1].data.results;
        $scope.loading = false;
    });



});
