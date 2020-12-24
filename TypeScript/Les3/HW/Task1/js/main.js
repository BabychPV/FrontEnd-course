// Создать словарь собственных определений, используя Generic function. Внутри должно быть
// определение для 3 свойств – ключ, значение, описание (различных типов данных). Для получения или
// записи использовать get/set реализацию доступа. Также для полей нужно использовать модификаторы
// доступа (на Ваш выбор). В итоге должен получится словарь терминов, принимающий на входящий
// параметр различные типы данных для реализации.
class DictionaryItem {
    constructor(key, value1, value2) {
        this._key = key;
        this._value1 = value1;
        this._value2 = value2;
    }
    set key(value) {
        if (value === null || value === undefined) {
            throw new Error("Значение value не может быть пустым.");
        }
        this._key = value;
    }
    get key() {
        return this._key;
    }
    set value1(value) {
        if (value === null || value === undefined) {
            throw new Error("Значение value не может быть пустым.");
        }
        this._value1 = value;
    }
    get value1() {
        return this._value1;
    }
    set value2(value) {
        if (value === null || value === undefined) {
            throw new Error("Значение value не может быть пустым.");
        }
        this._value2 = value;
    }
    get value2() {
        return this._value2;
    }
}
class MyDictionary {
    constructor() {
        this.data = [];
    }
    setValue(key, value1, value2) {
        this.data.push(new DictionaryItem(key, value1, value2));
    }
    getFirstValue() {
        if (this.data != undefined) {
            return this.data[0];
        }
        else {
            return null;
        }
    }
    getLastValue() {
        if (this.data != undefined) {
            return this.data[this.data.length - 1];
        }
        else {
            return null;
        }
    }
    getValue(key) {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].key === key) {
                return this.data[i];
            }
        }
        return null;
    }
    removeValue(key, psw) {
        if (psw === 'x') {
            this.data.forEach((item, index) => {
                if (item.key === key) {
                    this.data.splice(index, 1);
                    return true;
                }
            });
        }
        return false;
    }
    showDictionary() {
        this.data.forEach((item) => {
            console.log(`Key: ${item.key} val1: ${item.value1} val2: ${item.value2} \n`);
        });
    }
}
let dictionary = new MyDictionary();
dictionary.setValue("hello", "привет", "привет1");
dictionary.setValue("book", "книга", "привет2");
dictionary.setValue("apple", "яблоко", "привет3");
console.log('Add');
console.log(dictionary.getValue("book"));
console.log(dictionary.getFirstValue());
console.log(dictionary.getLastValue());
console.log('View');
dictionary.showDictionary();
console.log('remove');
dictionary.removeValue('apple', 'x');
console.log('View');
dictionary.showDictionary();
let dictionary2 = new MyDictionary();
dictionary2
    .setValue(1, true, 'true');
dictionary2
    .setValue(2, false, 'false');
dictionary2
    .setValue(7, true, 'true');
console
    .log(dictionary2
    .getValue(7));
console
    .log(dictionary2
    .getFirstValue());
console
    .log(dictionary2
    .getLastValue());
//# sourceMappingURL=main.js.map