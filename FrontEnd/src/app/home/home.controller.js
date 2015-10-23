app.controller('HomeController', homeController);

homeController.$inject= ['user'];

function homeController(user){
	var vm = this;
	var promise = user.list;
	promise.then(function success(list){		
		vm.users = list.data;
	}, function failure(data){
		console.log('err:', data);
	})
	
}