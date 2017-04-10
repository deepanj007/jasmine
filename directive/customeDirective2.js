myapp.directive('diva', function() {
	return {
    restrict : 'E', /* restrict this directive to elements */
    replace: false,
	template : "<h1>It is element Directive</h1>"
	
    };
});