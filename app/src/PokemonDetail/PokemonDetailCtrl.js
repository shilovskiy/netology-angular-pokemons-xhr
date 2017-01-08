'use strict';

pokemonApp.controller('PokemonDetailCtrl', function($scope, $routeParams, PokemonsService) {

    $scope.pokemonLoaded = false;

    PokemonsService.getPokemon($routeParams['pokemonId']).then(function(response) {
        $scope.pokemon = response.data;
        $scope.pokemonLoaded = true;
    });

        $scope.editPokemon = function(myPokemon){

            $scope.editionSuccess = false;

            PokemonsService.editPokemon(myPokemon).then(function success(response) {

                $scope.editionSuccess = true;

            },function err(response){
                //Редактирование не ОК, но и не нужно
                $scope.editionSuccess = true;

            } );

        }

    $scope.deletePokemon = function(pokemonId) {

        $scope.deletionError = false;
        $scope.deletionSuccess = false;

        PokemonsService.deletePokemon(pokemonId).then(function successCallback(response) {

            // Окей!
            $scope.deletionSuccess = true;

        }, function errorCallback(response) {

            // Не окей..
            $scope.deletionError = true;
        });

    }

});
