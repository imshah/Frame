app.controller('AppController', AppController);

AppController.$inject = ['topNav'];

function AppController(topNav){
	var vm = this;
	vm.tabs = topNav.tabs;		
}