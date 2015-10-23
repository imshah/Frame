app.config(routeConfig);

routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function routeConfig($stateProvider, $urlRouterProvider){
   $stateProvider
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

   //$urlRouterProvider.otherwise('/home');
};