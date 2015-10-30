app.directive("newsfeed", StatsDirective);

function StatsDirective(){
	return {
		restrict: "E",
		templateUrl: "app/newsfeed/newsfeed.tpl.html"
	}
}