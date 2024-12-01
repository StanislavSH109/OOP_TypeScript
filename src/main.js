var Car = /** @class */ (function () {
    function Car(model, color) {
        this.model = model;
        this.color = color;
    }
    return Car;
}());
var myCar = new Car('BMW', 'red');
console.log(myCar.model);
console.log(myCar.color);
