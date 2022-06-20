Array.prototype.square = function () { return this.map(function (n) { return n * n; }); }
Array.prototype.cube = function () { return this.map(function (n) { return n * n * n; }); }
Array.prototype.sum = function () { return this.reduce(function (a, b) { return a + b; }, 0); }
Array.prototype.average = function () { return this.sum() / this.length; }
Array.prototype.even = function () { return this.filter(function (item) { return 0 == item % 2; }); }
Array.prototype.odd = function () { return this.filter(function (item) { return 0 != item % 2; }); }

console.log(numbers.square(), [1, 4, 9, 16, 25]);
console.log(numbers.cube(), [1, 8, 27, 64, 125]);
console.log(numbers.sum(), 15,);
console.log(numbers.average(), 3);
console.log(numbers.even(), [2, 4]);
console.log(numbers.odd(), [1, 3, 5]);

