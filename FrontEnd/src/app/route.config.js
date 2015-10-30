app.config(routeConfig);

routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function routeConfig($stateProvider, $urlRouterProvider){
   $stateProvider
    .state('app', {
      url: "/app",
      views: {
        "topNav": {
          templateUrl: "app/app.tpl.html",
          controller: "AppController as vm"
        }
      }
    })
   	.state('home', {
      url:"/home",
      resolve: {
        user: function(HomeFactory){          
          return {
            list: HomeFactory.getAllUsers()
          }
        }
      },
   		views:{
   			"user": {          
   				templateUrl: "app/home/home.tpl.html",
   				controller: "HomeController as vm"
   			}
   		}
   	});

   $urlRouterProvider.otherwise('/app');
};