// Michał Mrowiński 30A - edycja
(function() {
var app = angular.module('calendar', []);

app.controller('CalendarController', ['$scope', function($scope) {
this.series = model;

this.seriesNo = -1;

this.setSeriesNo = function(numb) {
this.seriesNo = numb;
};
this.addSeries = function(object) {
var idx = this.series.indexOf(object) + 1;
this.series.splice(idx, 0, []);
};

this.range = function(range) {
var arr = [];
for (var i = 0; i < range; i++) {
arr += i+1;
}
return arr;
};

this.getSeries = function() {
return this.series[this.seriesNo];
};

this.edit = function(series, index, element) { //pobieram numer serii index i element ktory wcztyam pozniej do okna
console.log("edit");
console.log(series);
console.log(index);

$scope.record = {
	stars: element.stars,
	imgUrl: element.imgUrl,
	description: element.description,
	evaluated: element.evaluated,
	series: series,
	index: index,
};
};

this.edit2 = function(record) { //funkcja sluzaca do nadpisania wprowadzonych zmian

var getDate = function() {
d = new Date();
day = d.getDate();
mth = d.getMonth()+1;
year = d.getFullYear();
day = (day > 9) ? day : '0'+day;
mth = (mth > 9) ? mth : '0'+mth;
return day + '.' + mth + '.'+ year;
}

data = getDate(); // zapisuje date

this.series[record.series][record.index] = { // odwolanie do obiektu i zapisywanie
	stars: record.stars,
	imgUrl: record.imgUrl,
	description: record.description,
	evaluated: record.evaluated,
	date: data,
};
};

}]);

app.controller('FormController', ['$scope', function($scope) {
$scope.record = {
stars: 0,
imgUrl: 'img/smile0.png'
};
var getDate = function() {
d = new Date();
day = d.getDate();
mth = d.getMonth()+1;
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
imgUrl: 'img/smile0.png',
};
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
"description": 'vsdbgrhdgzs vevbts',
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