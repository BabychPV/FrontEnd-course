import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

interface Prod {
  id: number;
  name: string;
  price: number;
  category: string;

}

@Component({
  selector: 'app-les3',
  templateUrl: './les3.component.html',
  styleUrls: ['./les3.component.css']
})
export class Les3Component implements OnInit {

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

  Product: Prod = {id: 11, name: 'product 11', price: 1001, category: 'Category3'};


  @Input()
  rowsTable = 4;
  @Output()
  deleteEvent: EventEmitter<number>;

  curProduct: Prod[] = [];
  tempProduct: Prod[] = [];
  curCategory: string = undefined;

  constructor() {
    this.deleteEvent = new EventEmitter();
  }

  ngOnInit(): void {
    if (this.rowsTable > 10) {
      this.rowsTable = 10;
    }
    for (let i = 0, len = this.rowsTable; i < len; ++i) {
      this.curProduct.push(this.Products[i]);
    }
    this.tempProduct = this.curProduct;
  }

  deleteRow($event: any, obj: Prod): any {
    if (undefined !== this.curProduct.splice(this.curProduct.indexOf(obj), 1)) {
      this.tempProduct.splice(this.tempProduct.indexOf(obj), 1)
      this.rowsTable--;
      this.deleteEvent.emit(obj.id);
    }
  }

  getList($event: any): void {
    if ($event === 'Category') {
      this.curProduct = this.tempProduct;
    } else {
      this.curProduct = this.tempProduct.filter(word => word.category === $event);
    }

  }

  getStyles(price: number): any {
    let styles = {
      color: 'red'
    };
    if (price < 500) {
      styles = null;
    }
    return styles;
  }

  addProduct(): void {
    this.curProduct.push(this.Product);
    //  this.tempProduct.push(Product);
  }
}
