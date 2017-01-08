var pokemonApp = angular.module('PokemonApp', ['ngRoute','ngResource','btford.socket-io']);

angular
    .module('PokemonApp')



.config(

    function config($routeProvider) {

        $routeProvider.
        when('/pokemons', {
            templateUrl: 'src/PokemonList/PokemonList.html',
            controller: 'PokemonListCtrl'
        }).
        when('/pokemons/:pokemonId', {
            templateUrl: 'src/PokemonDetail/PokemonDetail.html',
            controller: 'PokemonDetailCtrl'
        }).
        when('/create', {
            templateUrl: 'src/CreatePokemon/CreatePokemon.html',
            controller: 'CreatePokemonCtrl'
        }).
        when('/realtime/:userName', {
            templateUrl: 'src/PokemonRealtime/PokemonRealtime.html',
            controller: 'PokemonRealtimeCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
)
    .config(
        function($httpProvider){
            //для post запросов
            $httpProvider.defaults.headers.post['application-id']='B956A02C-A016-D6FE-FFBD-11893D040E00';
            $httpProvider.defaults.headers.post['secret-key']='95D0B328-8AD3-3C35-FF71-FBBF9CEDBB00';
        }
    )

.factory('mySocket', function(socketFactory) {
  var myIoSocket = io.connect('https://netology-socket-io.herokuapp.com/');

    mySocket = socketFactory({
      ioSocket: myIoSocket
    });

    return mySocket;
});
