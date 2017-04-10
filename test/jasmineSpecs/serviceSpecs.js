describe("Service Specs for Sample Testing", function(){
    var scope, addService;

    beforeEach(module("myapp"))

    beforeEach(inject(function ($rootScope, $controller, _addService_) {
        scope = $rootScope.$new();
        addService = _addService_;
        $controller('myController', {
            $scope: scope,
            adding : {}
        }); 
    }));
    
    it('should send cancel notices whan cancelMeeting is called', function() {
        var fakeHttpPromise = {
            success: function() {}
        };
        spyOn(addService, 'add').and.returnValue(3);
        addService.add(1,2);
        result = addService.add(1,2);

        //scope.cancelMeeting('foo', 'bar');
        expect(addService.add).toHaveBeenCalled();
        expect(addService.add).toHaveBeenCalledWith(1,2);
        expect(result).toEqual(3);
    });

})