app.factory('HomeFactory', homeFactory);

homeFactory.$inject = ['$http'];

function homeFactory($http){
	var fac = {};

	fac.getAllUsers = function(){
		// var list =[ 
		// 	{ "id": "user1", "userName": "joker", "address": "Bleaker Street" }, 
		// 	{ "id": "user2", "userName": "batman", "address": "Gotham City" }, { "id": "user3", "userName": "spiderman", "address": "New York City" }, 
		// 	{ "id": "user4", "userName": "superman", "address": "Krypton" } 
		// ];

		// return list;
		return $http.get('http://localhost:6204/userdata/getall');
	}

	return fac;
}