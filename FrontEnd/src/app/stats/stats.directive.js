app.directive("stats", StatsDirective);

function StatsDirective(){
	return {
		restrict: "E",
		templateUrl: "app/stats/stats.tpl.html"
	}
}