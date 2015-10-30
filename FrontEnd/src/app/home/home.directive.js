app.directive("home", HomeDirective);

HomeDirective.$inject = ['HomeFactory'];

function HomeDirective(HomeFactory){
	return {
		restrict: "E",
		templateUrl: "app/home/home.tpl.html",
		link: function(scope, elem, attrs){
			scope.users = [];
			var promise = HomeFactory.getAllUsers();
			promise.then(function resolve(users){
				scope.users = users.data;
			},function reject(err){
				console.log('error:', err);
			})
		}
	}
}