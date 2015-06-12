(function() {
	var app = angular.module('calendar', []);
	
	app.controller('CalendarController', function() {
		this.series = model;
		
		this.range = function(range) {
			var arr = [];
			for (var i = 0; i < range; i++) {
				arr += i+1;
			}
			return arr;
		};
		
		this.seriesNo = -1;
		this.setSeriesNo = function(numb) {
			this.seriesNo = numb;
		};
		this.addSeries = function(object) {
			var idx = this.series.indexOf(object) + 1;
			this.series.splice(idx, 0, []);
		};
		
		this.getSeries = function() {
			return this.series[this.seriesNo];
		};
	});
	
	app.controller('FormController', ['$scope', function($scope) {
	$scope.record = {
		stars: 0,
		imgUrl: 'img/smile0.png'
	};
	var getDate = function() {
		d = new Date();
		day = d.getDay();
		mth = d.getMonth();
		year = d.getFullYear();
		day = (day > 9) ? day : '0'+day;
		mth = (mth > 9) ? mth : '0'+mth;
		return day + '.' + mth + '.'+ year;
	}
	this.add = function(series) {
		$scope.record.date = getDate();
		series.push($scope.record);
		$scope.record = {
			stars: 0,
			imgUrl: 'img/smile0.png'
		};
	};
	
	this.usun = function(series) {
		series.pop();
	};
	
	}]);
	
	app.controller('DropDownListController', ['$scope', function($scope) {
		this.clicked = false;
		this.itemsList = [];
		for (var i = 1; i <= 4; i++)
		this.itemsList.push('img/smile'+ i +'.png');
		this.toggle = function() {
			this.clicked = !this.clicked;
		};
		this.select = function(id) {
			this.clicked = false;
			$scope.record.imgUrl = this.itemsList[id];
		};
	}]);
	
	var model = [
		[ // pojedyncza seria
			{ // pojedynczy obrazek dnia
			"imgUrl": 'img/smile1.png',
			"date": '12.04.2014',
			"description": '',
			"stars": 3,
			"evaluated": true
			},
			{
			"imgUrl": 'img/smile2.png',
			"date": '12.04.2014',
			"description": '',
			"stars": 3,
			"evaluated": true
			},
			{
			"imgUrl": 'img/smile3.png',
			"date": '12.04.2014',
			"description": '',
			"stars": 3,
			"evaluated": true
			}
		],
		[
			{
			"imgUrl": 'img/smile4.png',
			"date": '12.04.2014',
			"description": '',
			"stars": 3,
			"evaluated": true
			},
			{
			"imgUrl": 'img/smile2.png',
			"date": '12.04.2014',
			"description": '',
			"stars": 3,
			"evaluated": true
			}
		]
	];
})();