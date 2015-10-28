app.config(routeConfig);

routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function routeConfig($stateProvider, $urlRouterProvider){
   $stateProvider
    .state('app', {
      url: "/app",
      resolve: {
        topNav: function(){
          var tabs = ["Home", "Stats", "NewsFeed"];
          return { 
            tabs: tabs
          }
        }
      },
      views: {
        "topNav": {
          templateUrl: "app/app.tpl.html",
          controller: "AppController as vm"
        }
      }
    })
   	.state('home', {
      resolve: {
        user: function(HomeFactory){
          return {
            list: HomeFactory.getAllUsers()
          }
        }
      },
   		views:{
   			"user.info": {          
   				templateUrl: "app/home/home.tpl.html",
   				controller: "HomeController as vm"
   			}
   		}
   	});

   $urlRouterProvider.otherwise('/app');
};