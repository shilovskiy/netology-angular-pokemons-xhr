angular
    .module('PokemonApp')
    .factory('PokemonsService', function($http) {
        var pokurl= 'http://pokeapi.co/api/v2/pokemon?limit=1000';
        return {
                getPokemons: function() {
                    return $http.get(pokurl); //try to use ext url
                },

                getPokemon: function(pokemonId) {
                    return $http.get('http://pokeapi.co/api/v2/pokemon/' + pokemonId);
                },
                editPokemon: function(pokemonData){
                    return $http({
                        method: 'PUT',
                        url: 'https://api.backendless.com/v1/data/pokemon',
                        data: pokemonData
                    });

                },
                createPokemon: function(pokemonData) {
                    return $http({
                        method: 'POST',
                        url: 'https://api.backendless.com/v1/data/pokemon',
                        data: pokemonData
                    });
                },

                deletePokemon: function(pokemonId) {
                    return $http({
                        method: 'DELETE',
                        url: 'https://api.backendless.com/v1/data/pokemon/' + pokemonId
                    });
                }

            }

        }

    );
