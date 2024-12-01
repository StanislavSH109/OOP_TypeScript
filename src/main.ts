class Car {
    public model: string;
    protected color: string;
    constructor(model: string, color: string) {
        this.model = model;
        this.color = color;
    }

    changeColor(newColor: string) {
        this.color = newColor;
    }
}

class BMW extends Car {
    public speed: number;

    constructor(model: string, color: string, speed: number) {
        super(model, color)
        this.speed = speed;
    }

    changeColor(newColor: string): void {
        this.color = newColor;
    }


}

const myCar = new Car('BMW', 'red')
console.log(myCar.model);
myCar.changeColor('White');
console.log(myCar);
//Оба свойства и public и без модификатора доступа доступны без ограничений.
// Если мы применим private к свойству color, то TS сразу подсветит ошибку о том, что вне класса свойство не может применяться.
//Добавив публичный метод changeColor, мы смогли изменить приватное свойство Color
//При добавлении свойства protected - мы можем изменять в наследуемом классе свойство родительского класса при помощи реализованного внутри метода.