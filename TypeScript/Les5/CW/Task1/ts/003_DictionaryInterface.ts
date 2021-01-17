import {DictionaryItem} from "./001_DictionaryClass.js";

export interface DictionaryInterface {

    data: DictionaryItem<any, any>[];

    setValue: (key: any, value1: any) => void

    getValue: (number: number) => DictionaryItem<any, any>

}