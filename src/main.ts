class Car {
    public model: string;
    private color: string;
    constructor(model: string, color: string) {
        this.model = model;
        this.color = color;
    }

    changeColor(newColor: string) {
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