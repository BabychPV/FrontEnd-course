// Создать понятие абстрактного родительского класса Car. От него создать 3 производных класса (марки
// автомобилей) с применением метода super(). В классах использовать модификаторы как в родительском
// классе, так и в производных. Создать от производных классов минимум по 2 экземпляра (модели
// автомобилей). Методы в производных классах должны выводить на экран все свойства (описание
// автомобиля). Подумайте, какие свойства в производных классах должны быть public, какие – private и
// protected.
class Car {
    constructor(typeOfBody, cab, boot, tank, steeringWheel, engine, battery, tire, brand, model) {
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
    CarProp() {
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
    constructor(battery, boot, cab, engine, steeringWheel, tank, tire, brand, model) {
        super('Sedan', cab, boot, tank, steeringWheel, engine, battery, tire, brand, model);
        this._bodyCode = 1;
    }
    get bodyCode() {
        return this._bodyCode;
    }
    set bodyCode(value) {
        if (value > 0.0) {
            this._bodyCode = Math.round(value);
        }
    }
    toString() {
        console.log(super.CarProp() + '\n Код:' + this._bodyCode.toString());
    }
    test() {
        console.log('Child');
    }
}
class SUV extends Car {
    constructor(battery, boot, cab, engine, steeringWheel, tank, tire, brand, model) {
        super('SUV', cab, boot, tank, steeringWheel, engine, battery, tire, brand, model);
        this._bodyCode = 2;
    }
    get bodyCode() {
        return this._bodyCode;
    }
    set bodyCode(value) {
        if (value > 0.0) {
            this._bodyCode = Math.round(value);
        }
    }
    toString() {
        console.log(super.CarProp() + '\n Код:' + this._bodyCode.toString());
    }
}
let BMW = new Sedan('No', 'Yes', 'Yes', 'BMW S85B50', 'Leather', '50 gl', 'Goodyear', 'BMW', '3 Series');
BMW.toString();
BMW = new SUV('No', 'Yes', 'Yes', 'BMW S85B100', 'Leather', '70 gl', 'Goodyear', 'BMW', 'M6');
BMW.bodyCode = 3;
BMW.toString();
//# sourceMappingURL=main.js.map