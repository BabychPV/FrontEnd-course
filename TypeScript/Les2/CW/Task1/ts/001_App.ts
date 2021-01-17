interface IAnimals {

    speciesAnimals: string;
    typeOfMovement: string;
    speed: number;
    whaToEat: string;
    extractingFood: () => string;
    showProp?: () => void;
}

class Cat implements IAnimals {

    constructor(public speciesAnimals: string = 'Кошка', public speed: number = 10, public typeOfMovement: string = 'по земле', public whaToEat: string = 'мясо') {
        this.speciesAnimals = speciesAnimals;
        this.speed = speed;
        this.typeOfMovement = typeOfMovement;
        this.whaToEat = whaToEat;

    }

    public extractingFood(): string {

        let exFood: string = 'Охота'
        console.log(exFood)

        return exFood
    }

    public showProp() {
        console.log(`Тип - ${this.speciesAnimals} Скорость - ${this.speed}  Тип передвижения - ${this.typeOfMovement} Что кушает - ${this.whaToEat}`)

    }

}

class Bird implements IAnimals {


    constructor(public speciesAnimals: string = 'птица', public speed: number = 20, public typeOfMovement: string = 'по воздуху', public whaToEat: string = 'корм') {
        this.speciesAnimals = speciesAnimals;
        this.speed = speed;
        this.typeOfMovement = typeOfMovement;
        this.whaToEat = whaToEat;
    }

    public extractingFood(): string {

        let exFood: string = 'Охота'
        console.log(exFood)

        return exFood
    }

    // public showProp() {
    //     console.log(`Тип - ${this.speciesAnimals} Скорость - ${this.speed}  Тип передвижения - ${this.typeOfMovement} Что кушает - ${this.whaToEat}`)
    //
    // }
}

class Fish implements IAnimals {


    constructor(public speciesAnimals: string = 'рыба', public speed: number = 20, public typeOfMovement: string = 'в воде', public whaToEat: string = '?') {
        this.speciesAnimals = speciesAnimals;
        this.speed = speed;
        this.typeOfMovement = typeOfMovement;
        this.whaToEat = whaToEat;
    }

    public extractingFood(): string {

        let exFood: string = 'Охота'
        console.log(exFood)

        return exFood
    }

    public showProp() {
        console.log(`Тип - ${this.speciesAnimals} Скорость - ${this.speed}  Тип передвижения - ${this.typeOfMovement} Что кушает - ${this.whaToEat}`)

    }
}


let C: Cat = new Cat();
C.showProp();