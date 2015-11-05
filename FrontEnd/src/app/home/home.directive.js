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
			vm.count = 0;

			var promise = HomeFactory.getQuestions();
			promise.then(function success(list){		
				vm.quiz = list.data;		
				vm.currentQuiz = vm.getNextQuestion();
			}, function failure(errData){
				console.log('err:', errData);
			});

			vm.getNextQuestion= function(){
				return vm.quiz[vm.count++];
			};

			vm.next = function(user){
				console.log(user);

			}
		},
		link: function(scope, elem, attrs){
		}
	}
}