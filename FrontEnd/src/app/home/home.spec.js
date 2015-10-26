'use strict';

//var expect = require('chai').expect;
// var x = require('angular-mocks');
(function(){
	describe("@dev", function(){
		it('running test at home', function(mochaDone){
			//expect(2).to.equal(2);
			mochaDone();
		});

		it('running test2 at home', function(mochaDone){
			//expect(2).to.equal(92);
			mochaDone();
		});
	});

	// describe('@dev: HomeFactory', function(){
	// 	var httpBackend, rootScope, homeFactory;

	// 	beforeEach(angular.mock.module('triviaApp'));

	// 	beforeEach(inject(function(_$rootScope_,_$httpBackend_,_HomeFactory_){
	// 		httpBackend = _$httpBackend_;
	// 		scope = _$rootScope_.$new();
	// 		homeFactory = HomeFactory;
	// 	}));

	// 	afterEach(function(){
	// 		httpBackend.verifyNoOutstandingExpectation();
	// 		httpBackend.verifyNoOutstandingRequest();
	// 	});

	// 	// it('getAll user - gets the list of all users', function(){
	// 	// 	httpBackend.expectGet('http://localhost:6204/userdata/getall');
	// 	// 	homeFactory.getAllUser();
	// 	// 	httpBackend.flush();
	// 	// });
	// });
})();