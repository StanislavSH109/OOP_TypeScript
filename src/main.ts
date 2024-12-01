class Car {
    public model: string;
    private color: string;
    constructor(model: string, color: string) {
        this.model = model;
        this.color = color;
    }
}

const myCar = new Car('BMW', 'red')
console.log(myCar.model);
console.log(myCar.color);

//Оба свойства и public и без модификатора доступа доступны без ограничений.
// Если мы применим private к свойству color, то TS сразу подсветит ошибку о том, что вне класса свойство не может применяться.