import {Injectable} from '@angular/core';


export interface Prod {
  id: number;
  name: string;
  price: number;
  category: string;

}

export class ObjProd implements Prod {

  category: string;
  id: number;
  name: string;
  price: number;

  constructor(id: number, name: string, price: number, category: string) {
    this.category = category;
    this.id = id;
    this.name = name;
    this.price = price;
  }

}


@Injectable({
  providedIn: 'root'
})
export class Les4Service {
  Products: Prod[] = [{id: 1, name: 'product 1', price: 100, category: 'Category1'},
    {id: 2, name: 'product 2', price: 200, category: 'Category1'},
    {id: 3, name: 'product 3', price: 300, category: 'Category1'},
    {id: 4, name: 'product 4', price: 400, category: 'Category2'},
    {id: 5, name: 'product 5', price: 500, category: 'Category2'},
    {id: 6, name: 'product 6', price: 600, category: 'Category2'},
    {id: 7, name: 'product 7', price: 700, category: 'Category3'},
    {id: 8, name: 'product 8', price: 800, category: 'Category3'},
    {id: 9, name: 'product 9', price: 900, category: 'Category3'},
    {id: 10, name: 'product 10', price: 1000, category: 'Category3'}];

  constructor() {
  }

}
