import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-table-host',
  templateUrl: './my-table-host.component.html',
  styleUrls: ['./my-table-host.component.css']
})
export class MyTableHostComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

  }

  Logger($event: any): void {
    console.log('Delete row id #' + $event);
  }

}
