describe("Controller Specs for Sample Testing", function(){
	 var appCtrl,scope;    
	 //mock Application to allow us to inject our own dependencies
	 beforeEach(module("myapp"))
     
	 //mock the controller for the same reason and include $rootScope and $controller
	 beforeEach(inject(function ($controller,$rootScope,$httpBackend,$compile){	 
	 //create an empty scope
     scope = $rootScope.$new();
	 //declare the controller and inject our empty scope
	 appCtrl = $controller("myController",{$scope: scope});	
     httpMock = $httpBackend;
     compile= $compile;
     element = compile("<diva></diva>")(scope);
     scope.$digest();
	 }));
	 
	 it("testing variable in controller",function(){   
        expect(true).toBe(true);	      
	 });
	 
	  it("testing variable in controller 2nd time", function(){
		 expect(scope.deep).toBe("deepanjan");
		 //alert("scope"+scope.deep);
	  });
	  
	  it("testing function in controller", function(){
		 expect(scope.sampleFunction()).not.toBe(3);
	  });
      it("testing function in controller", function(){
		 expect(scope.sampleFunction()).toBe(4);
	  });
	  it("should demonstrate using when (200 status)", function() {
        httpMock.expectGET("http://localhost:8082/").respond("Hi");
         
          scope.alert();
          httpMock.flush();
          expect(scope.valid).toBe(true);
          expect(scope.response).toBe("Hi");
      });
      it('Replaces the element with the appropriate content', function() {
        // Check that the compiled element contains the templated content
      expect(element.html()).toContain("It is element Directive");
      });
 });