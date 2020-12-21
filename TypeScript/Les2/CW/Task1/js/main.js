class Cat {
    constructor(speciesAnimals = 'Кошка', speed = 10, typeOfMovement = 'по земле', whaToEat = 'мясо') {
        this.speciesAnimals = speciesAnimals;
        this.speed = speed;
        this.typeOfMovement = typeOfMovement;
        this.whaToEat = whaToEat;
        this.speciesAnimals = speciesAnimals;
        this.speed = speed;
        this.typeOfMovement = typeOfMovement;
        this.whaToEat = whaToEat;
    }
    extractingFood() {
        let exFood = 'Охота';
        console.log(exFood);
        return exFood;
    }
    showProp() {
        console.log(`Тип - ${this.speciesAnimals} Скорость - ${this.speed}  Тип передвижения - ${this.typeOfMovement} Что кушает - ${this.whaToEat}`);
    }
}
class Bird {
    constructor(speciesAnimals = 'птица', speed = 20, typeOfMovement = 'по воздуху', whaToEat = 'корм') {
        this.speciesAnimals = speciesAnimals;
        this.speed = speed;
        this.typeOfMovement = typeOfMovement;
        this.whaToEat = whaToEat;
        this.speciesAnimals = speciesAnimals;
        this.speed = speed;
        this.typeOfMovement = typeOfMovement;
        this.whaToEat = whaToEat;
    }
    extractingFood() {
        let exFood = 'Охота';
        console.log(exFood);
        return exFood;
    }
}
class Fish {
    constructor(speciesAnimals = 'рыба', speed = 20, typeOfMovement = 'в воде', whaToEat = '?') {
        this.speciesAnimals = speciesAnimals;
        this.speed = speed;
        this.typeOfMovement = typeOfMovement;
        this.whaToEat = whaToEat;
        this.speciesAnimals = speciesAnimals;
        this.speed = speed;
        this.typeOfMovement = typeOfMovement;
        this.whaToEat = whaToEat;
    }
    extractingFood() {
        let exFood = 'Охота';
        console.log(exFood);
        return exFood;
    }
    showProp() {
        console.log(`Тип - ${this.speciesAnimals} Скорость - ${this.speed}  Тип передвижения - ${this.typeOfMovement} Что кушает - ${this.whaToEat}`);
    }
}
let C = new Cat();
C.showProp();
//# sourceMappingURL=main.js.map