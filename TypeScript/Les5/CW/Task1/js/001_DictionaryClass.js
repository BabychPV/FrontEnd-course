export class DictionaryItem {
    constructor(key, value1) {
        this._key = key;
        this._value1 = value1;
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
}
export class MyDictionary {
    constructor() {
        this.data = [];
        // public getFirstValue(): DictionaryItem<TKey, TValue1> | null {
        //     if (this.data != undefined) {
        //         return this.data[0];
        //     } else {
        //         return null;
        //     }
        // }
        //
        // public getLastValue(): DictionaryItem<TKey, TValue1> | null {
        //     if (this.data != undefined) {
        //         return this.data[this.data.length - 1];
        //     } else {
        //         return null;
        //     }
        // }
        // public removeValue(key: TKey, psw: string): boolean {
        //     if (psw === 'x') {
        //         this.data.forEach((item, index) => {
        //             if (item.key === key) {
        //                 this.data.splice(index, 1);
        //                 this._amountItem--;
        //                 return true
        //             }
        //         });
        //     }
        //     return false;
        // }
        //
        // public showDictionary() {
        //
        //     this.data.forEach((item) => {
        //         console.log(`Key: ${item.key} val1: ${item.value1} val2: ${item.value2} \n`)
        //     });
        // }
    }
    setValue(key, value1) {
        this.data.push(new DictionaryItem(key, value1));
        this._amountItem++;
    }
    setPropCustomAnswer(key, value) {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].key === key) {
                // @ts-ignore
                this.data[i].value1.CustomAnswer = value;
            }
        }
    }
    getValue(index) {
        if (index < 0 && index > this._amountItem) {
            return this.data[index];
        }
        return null;
    }
    getValueForKey(key) {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].key === key) {
                return this.data[i];
            }
        }
        return null;
    }
    get amountItem() {
        return this._amountItem;
    }
}
//# sourceMappingURL=001_DictionaryClass.js.map