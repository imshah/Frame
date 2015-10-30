app.controller('AppController', AppController);

AppController.$inject = [];

function AppController(){
	var vm = this;
	vm.tabs = [
		{name:"home", isActive: true, directive:"<home></home>"},
		{name:"stats", isActive: false, directive:"<stats></stats>"},
		{name:"newsfeed", isActive: false, directive:"<newsfeed></newsfeed>"}
	];		


	vm.getActiveTab = function(){
		var activeTab = null;
		vm.tabs.forEach(function(item, index){
			if(item.isActive === true){
				activeTab = item;
				return activeTab;
			}
		})
		return activeTab;
	};

	var setActiveTab = function(tabName){
		vm.tabs.forEach(function(item, index){
			if(tabName === item.name){
				item.isActive = true;
			}else{
				item.isActive = false;
			}
		})
	};
}