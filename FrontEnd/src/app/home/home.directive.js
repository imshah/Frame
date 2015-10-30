app.directive("home", HomeDirective);

HomeDirective.$inject = [];

function HomeDirective(){
	return {
		restrict: "E",
		templateUrl: "app/home/home.tpl.html"
		// scope:{
  //         activeTab: '='
		// },
		// compile: function(elem, attr){
		// 	return{
		// 		pre: function(scope, elem, attr){
		// 			scope.isActive = scope.activeTab.name === "home" ? true : false;					
		// 		}
		// 	}
		// }
	}
}