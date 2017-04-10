//alert("in controller");
myapp.controller("myController", function($scope,$http, addService) {
	$scope.deep = "deepanjan";
	$scope.alert = function(){
	$http.get('http://localhost:8082/')
      .success(function(data, status, headers, config) {
        $scope.valid = true;
            //alert("data");
        $scope.response = data;
      })
      .error(function(data, status, headers, config) {
        $scope.valid = false;
    });
	};
	$scope.sampleFunction = function(){
		return 4;
	};
    $scope.add = addService.add(5,4);
    
});