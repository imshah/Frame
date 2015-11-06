app.directive("home", HomeDirective);

HomeDirective.$inject = ['HomeFactory'];

function HomeDirective(HomeFactory){
	return {
		restrict: "E",
		templateUrl: "app/home/home.tpl.html",
		bindToController: true,
		controllerAs: "vm",
		controller: function(){
			var vm = this;
			vm.currentQuiz = null;
			vm.userScore = 0;
			vm.count = 0;

			var promise = HomeFactory.getQuestions();
			promise.then(function (quizes){		
				vm.quiz = quizes;		
				vm.currentQuiz = vm.getNextQuestion();
			});

			vm.getNextQuestion= function(givenAnswer){
				//console.log(givenAnswer);
				if( givenAnswer && 
					HomeFactory.isAnswerValid(givenAnswer.answer, vm.currentQuiz.correctAnswer)){
					vm.userScore = HomeFactory.increaseScore(vm.userScore, 1);
				}				
				return vm.currentQuiz = vm.quiz[vm.count++];

			};
		},
		link: function(scope, elem, attrs){
		}
	}
}