app.controller("tabCtrl", ["$scope", function($scope){
	$scope.tab = 1;

	$scope.selectTab = function(setTab){
	 	$scope.tab = setTab;
	}

	$scope.isSelected = function(isSet){
		return $scope.tab === isSet;
	}
}]);