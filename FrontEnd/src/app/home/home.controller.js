app.controller('HomeController', HomeController);

HomeController.$inject= ['quiz'];

function HomeController(quiz){
	var vm = this;
	vm.tabs = ["Home", "Stats", "NewsFeed"];
	vm.name="Home";
	
	vm.count = 0;

	var promise = quiz.list;
	promise.then(function success(list){		
		vm.quiz = list.data;		
	}, function failure(errData){
		console.log('err:', errData);
	});

	vm.getNextQuestion= function(){
		vm.currentQuiz = vm.quiz[count];
		count++;
		return vm.currentQuiz;
	}

}