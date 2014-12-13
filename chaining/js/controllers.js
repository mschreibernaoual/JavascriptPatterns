(function(){
	'use strict';

	function Calculator(start){
		if (this instanceof Calculator) {
			var _total = start || 0;
			this.add = function(x) { _total += x; return this;}
			this.sub = function(x) { _total -= x; return this;}
			this.mul = function(x) { _total *= x; return this;}
			this.div = function(x) { _total /= x; return this;}

			Object.defineProperty(this, "Total", {get: function () {
				return _total;
			},
				set: function (newValue) {
					_total = newValue;

				},
				enumerable: false,
				configurable: true});

		}
		else {
			return new Calculator();
		}

	}



	var controllerId = "mainCtrl";

	angular.module('patterns.controllers').controller(controllerId, ['$scope', mainCtrl]);

	function mainCtrl($scope){

		var vm = this;
		vm.title = "Chaining Pattern";
		vm.result = 0;

		var _init = function(){
			console.log('Chaining Pattern Initilized');
		}

		_init();

		vm.process = function(){
			var calculator = new Calculator(5).add(2).mul(5).sub(7);

			vm.result = calculator.Total;
		}
	}
}());