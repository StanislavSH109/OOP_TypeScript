class Car {
    public model: string;
    color: string;
    constructor(model: string, color: string) {
        this.model = model;
        this.color = color;
    }
}

const myCar = new Car('BMW', 'red')
console.log(myCar.model);
console.log(myCar.color);

//Оба свойства и public и без модификатора доступа доступны без ограничений.