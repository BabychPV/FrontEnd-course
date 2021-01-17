// Создать понятие абстрактного родительского класса Car. От него создать 3 производных класса (марки
// автомобилей) с применением метода super(). В классах использовать модификаторы как в родительском
// классе, так и в производных. Создать от производных классов минимум по 2 экземпляра (модели
// автомобилей). Методы в производных классах должны выводить на экран все свойства (описание
// автомобиля). Подумайте, какие свойства в производных классах должны быть public, какие – private и
// protected.

interface ICommon {
    CarProp: () => string;
}

abstract class Car implements ICommon {

    protected typeOfBody: string;
    public brand: string;
    public model: string;
    public cab?: string;
    public boot?: string;
    public tank: string;
    public steeringWheel: string;
    public engine: string;
    public battery?: string;
    public tire: string;

    protected constructor(typeOfBody: string, cab: string, boot: string, tank: string, steeringWheel: string, engine: string, battery: string, tire: string, brand: string, model: string) {
        this.typeOfBody = typeOfBody;
        this.cab = cab;
        this.boot = boot;
        this.tank = tank;
        this.steeringWheel = steeringWheel;
        this.engine = engine;
        this.battery = battery;
        this.tire = tire;
        this.brand = brand;
        this.model = model;
    }


    public CarProp(): string {
        return `Марка: ${this.brand}
                разновидность автомобиля: ${this.typeOfBody} 
                кабина: ${this.cab}
                багажник: ${this.boot}
                бензобак: ${this.tank}
                руль: ${this.steeringWheel}
                двигатель: ${this.engine}
                battery: ${this.battery}
                шина: ${this.tire}`;
    }


}


class Sedan extends Car {

    private _bodyCode: number = 1;

    get bodyCode(): number {
        return this._bodyCode;
    }

    set bodyCode(value: number) {
        if (value > 0.0) {
            this._bodyCode = Math.round(value);
        }
    }

    constructor(battery: string, boot: string, cab: string, engine: string, steeringWheel: string, tank: string, tire: string, brand: string, model: string) {
        super('Sedan', cab, boot, tank, steeringWheel, engine, battery, tire, brand, model);
    }

    public toString(): void {
        console.log(super.CarProp() + '\n Код:' + this._bodyCode.toString());
    }

    public test() {
        console.log('Child')
    }
}

class SUV extends Car {

    private _bodyCode: number = 2;

    get bodyCode(): number {
        return this._bodyCode;
    }

    set bodyCode(value: number) {
        if (value > 0.0) {
            this._bodyCode = Math.round(value);
        }
    }

    constructor(battery: string, boot: string, cab: string, engine: string, steeringWheel: string, tank: string, tire: string, brand: string, model: string) {
        super('SUV', cab, boot, tank, steeringWheel, engine, battery, tire, brand, model);
    }

    public toString(): void {
        console.log(super.CarProp() + '\n Код:' + this._bodyCode.toString());
    }


}


let BMW: Car = new Sedan('No', 'Yes', 'Yes', 'BMW S85B50', 'Leather', '50 gl', 'Goodyear', 'BMW', '3 Series')
BMW.toString();

BMW = new SUV('No', 'Yes', 'Yes', 'BMW S85B100', 'Leather', '70 gl', 'Goodyear', 'BMW', 'M6');
(BMW as SUV).bodyCode = 3;
BMW.toString();