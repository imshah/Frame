app.factory('HomeFactory', homeFactory);

homeFactory.$inject = ['$http'];

function homeFactory($http){
	var fac = {};

	fac.getAllUsers = function(){
		return $http.get('http://localhost:6204/userdata/getall')
			.then(function success(users){
				return users;
			}, function failure(data){
				console.log('err', data)
			})
	}

	fac.getQuestions = function(){
		return $http.get('http://localhost:6204/quiz/questions')
			.then(function success(list){
				list.data.forEach(function(item, index){
					item.answers.forEach(function(data, idx){
						data.isSelected = false;
					});
				});
				return list.data;
			}, function failure(data){
				console.log('err', data)
			})
			
	}

	fac.isAnswerValid = function(givenAnswer, correctAnswer){
		if(correctAnswer.statement === givenAnswer){
			return true;
		}
		return false;
	}

	fac.increaseScore = function(score, increaseBy){
		score += increaseBy;
		return score;
	}	

	return fac;
}