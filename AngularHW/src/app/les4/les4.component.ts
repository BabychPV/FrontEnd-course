import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Les4Service, ObjProd, Prod} from './les4.service';

// export interface Prod {
//   id: number;
//   name: string;
//   price: number;
//   category: string;
//
// }
//
// class ObjProd implements Prod {
//
//   category: string;
//   id: number;
//   name: string;
//   price: number;
//
//   constructor(id: number, name: string, price: number, category: string) {
//     this.category = category;
//     this.id = id;
//     this.name = name;
//     this.price = price;
//   }
//
// }

@Component({
  selector: 'app-les4',
  templateUrl: './les4.component.html',
  styleUrls: ['./les4.component.css']
})
export class Les4Component implements OnInit {

  Product: Prod = {id: 11, name: 'product 11', price: 1001, category: 'Category3'};

  @Input()
  rowsTable = 4;
  @Output()
  deleteEvent: EventEmitter<number>;

  curProduct: Prod[] = [];
  tempProduct: Prod[] = [];
  curCategory: string = undefined;

  constructor(private Les4ServiceService: Les4Service) {
    this.deleteEvent = new EventEmitter();
  }

  ngOnInit(): void {
    if (this.rowsTable > 10) {
      this.rowsTable = 10;
    }
    for (let i = 0, len = this.rowsTable; i < len; ++i) {
      this.curProduct.push(this.Les4ServiceService.Products[i]);
    }
    this.tempProduct = this.curProduct;
  }

  deleteRow($event: any, obj: Prod): any {
    if (undefined !== this.curProduct.splice(this.curProduct.indexOf(obj), 1)) {
      this.tempProduct.splice(this.tempProduct.indexOf(obj), 1);
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
    this.curProduct.push(new ObjProd(this.Product.id, this.Product.name, this.Product.price, this.Product.category));
  }
}
