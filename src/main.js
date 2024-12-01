var Car = /** @class */ (function () {
    function Car(model, color) {
        this.model = model;
        this.color = color;
    }
    Car.prototype.changeColor = function (newColor) {
        this.color = newColor;
    };
    return Car;
}());
var myCar = new Car('BMW', 'red');
console.log(myCar.model);
myCar.changeColor('White');
console.log(myCar);
//Оба свойства и public и без модификатора доступа доступны без ограничений.
// Если мы применим private к свойству color, то TS сразу подсветит ошибку о том, что вне класса свойство не может применяться.
