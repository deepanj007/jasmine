describe("Service Specs for Sample Testing", function(){
    var scope, addService;

    beforeEach(module("myapp"))

    beforeEach(inject(function ($rootScope, $controller, _addService_) {
        scope = $rootScope.$new();
        addService = _addService_;
    }));
    it('should contain a service', function(){
        expect(addService).not.toBe(null);
    })
    it('service returns proper value', function(){
         expect(addService.add(1,2)).toBe(4);
    })
    it('should send cancel notices whan cancelMeeting is called', function() {
        spyOn(addService, 'add').and.returnValue(3);
        //addService.add(1,2);
        result = addService.add(1,2);

        expect(addService.add).toHaveBeenCalled();
        expect(addService.add).toHaveBeenCalledWith(1,2);
        expect(result).toEqual(3);
    });

})