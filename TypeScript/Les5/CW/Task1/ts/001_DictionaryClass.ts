import {DictionaryInterface} from '003_DictionaryInterface'

export  class DictionaryItem<TKey, TValue1> {

    private _key: TKey;
    private _value1: TValue1;

    constructor(key: TKey, value1: TValue1) {
        this._key = key;
        this._value1 = value1;
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

}


export class MyDictionary<TKey, TValue1>  implements DictionaryInterface{

    public data: DictionaryItem<TKey, TValue1>[] = [];
    private _amountItem: number;

    public setValue(key: TKey, value1: TValue1) {
        this.data.push(new DictionaryItem<TKey, TValue1>(key, value1));
        this._amountItem++;
    }

    public setPropCustomAnswer(key: TKey, value: number):void {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].key === key) {
                // @ts-ignore
                this.data[i].value1.CustomAnswer = value;
            }
        }
    }


    public getValue(index: number): DictionaryItem<TKey, TValue1> | null {
        if (index < 0 && index > this._amountItem) {
            return this.data[index];
        }

        return null;
    }


    public getValueForKey(key: TKey): DictionaryItem<TKey, TValue1> | null {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].key === key) {
                return this.data[i];
            }
        }

        return null;
    }

    get amountItem(): number {
        return this._amountItem;
    }

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