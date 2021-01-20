import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface Prod {
  id: number;
  name: string;
  price: number;

}

@Component({
  selector: 'app-les2',
  templateUrl: './les2.component.html',
  styleUrls: ['./les2.component.css']
})
export class Les2Component implements OnInit {

  Products: Prod[] = [{id: 1, name: 'product 1', price: 100},
    {id: 2, name: 'product 2', price: 200},
    {id: 3, name: 'product 3', price: 300},
    {id: 4, name: 'product 4', price: 400},
    {id: 5, name: 'product 5', price: 500},
    {id: 6, name: 'product 6', price: 600},
    {id: 7, name: 'product 7', price: 700},
    {id: 8, name: 'product 8', price: 800},
    {id: 9, name: 'product 9', price: 900},
    {id: 10, name: 'product 10', price: 1000}];

  @Input()
  rowsTable = 5;
  @Output()
  deleteEvent: EventEmitter<number>;
  curProduct: Prod[] = [];

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
  }

  DeleteRow($event: any, obj: Prod): any {
    if (undefined !== this.curProduct.splice(this.curProduct.indexOf(obj), 1)) {
      this.rowsTable--;
      this.deleteEvent.emit(obj.id);
    }
  }
}
