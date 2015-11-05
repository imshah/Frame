app.factory('HomeFactory', homeFactory);

homeFactory.$inject = ['$http'];

function homeFactory($http){
	var fac = {};

	fac.getAllUsers = function(){
		return $http.get('http://localhost:6204/userdata/getall');
	}

	fac.getQuestions = function(){
		return $http.get('http://localhost:6204/quiz/questions');
	}

	return fac;
}