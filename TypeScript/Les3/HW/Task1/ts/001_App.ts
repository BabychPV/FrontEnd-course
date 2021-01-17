// Создать словарь собственных определений, используя Generic function. Внутри должно быть
// определение для 3 свойств – ключ, значение, описание (различных типов данных). Для получения или
// записи использовать get/set реализацию доступа. Также для полей нужно использовать модификаторы
// доступа (на Ваш выбор). В итоге должен получится словарь терминов, принимающий на входящий
// параметр различные типы данных для реализации.


class DictionaryItem<TKey, TValue1, TValue2> {

    private _key: TKey;
    private _value1: TValue1;
    private _value2: TValue2;

    constructor(key: TKey, value1: TValue1, value2: TValue2) {
        this._key = key;
        this._value1 = value1;
        this._value2 = value2;
    }

    public set key(value: TKey) {
        if (value === null || value === undefined) {
            throw new Error("Значение value не может быть пустым.");
        }
        this._key = value;
    }

    public get key(): TKey {
        return this._key;
    }

    public set value1(value: TValue1) {
        if (value === null || value === undefined) {
            throw new Error("Значение value не может быть пустым.");
        }
        this._value1 = value;
    }

    public get value1(): TValue1 {
        return this._value1;
    }

    public set value2(value: TValue2) {
        if (value === null || value === undefined) {
            throw new Error("Значение value не может быть пустым.");
        }
        this._value2 = value;
    }

    public get value2(): TValue2 {
        return this._value2;
    }

}


class MyDictionary<TKey, TValue1, TValue2> {

    private data: DictionaryItem<TKey, TValue1, TValue2>[] = [];

    public setValue(key: TKey, value1: TValue1, value2: TValue2) {
        this.data.push(new DictionaryItem<TKey, TValue1, TValue2>(key, value1, value2));
    }

    public getFirstValue(): DictionaryItem<TKey, TValue1, TValue2> | null {
        if (this.data != undefined) {
            return this.data[0];
        } else {
            return null;
        }
    }

    public getLastValue(): DictionaryItem<TKey, TValue1, TValue2> | null {
        if (this.data != undefined) {
            return this.data[this.data.length - 1];
        } else {
            return null;
        }
    }

    public getValue(key: TKey): DictionaryItem<TKey, TValue1, TValue2> | null {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].key === key) {
                return this.data[i];
            }
        }

        return null;
    }

    public removeValue(key: TKey, psw: string): boolean {
        if (psw === 'x') {
            this.data.forEach((item, index) => {
                if (item.key === key) {
                    this.data.splice(index, 1);
                    return true
                }
            });
        }
        return false;
    }


    public showDictionary() {

        this.data.forEach((item) => {
            console.log(`Key: ${item.key} val1: ${item.value1} val2: ${item.value2} \n`)
        });
    }

}

let dictionary = new MyDictionary<string, string, string>();
dictionary.setValue("hello", "привет", "привет1");
dictionary.setValue("book", "книга", "привет2");
dictionary.setValue("apple", "яблоко", "привет3");
console.log('Add');
console.log(dictionary.getValue("book"));
console.log(dictionary.getFirstValue())
console.log(dictionary.getLastValue())

console.log('View')
dictionary.showDictionary();
console.log('remove');
dictionary.removeValue('apple', 'x');
console.log('View')
dictionary.showDictionary();


let
    dictionary2 = new MyDictionary<number, boolean, string>();
dictionary2
    .setValue(
        1
        ,
        true
        ,
        'true'
    );
dictionary2
    .setValue(
        2
        ,
        false
        ,
        'false'
    );
dictionary2
    .setValue(
        7
        ,
        true
        ,
        'true'
    );

console
    .log(dictionary2

        .getValue(
            7
        ));
console
    .log(dictionary2

        .getFirstValue()
    )
console
    .log(dictionary2

        .getLastValue()
    )