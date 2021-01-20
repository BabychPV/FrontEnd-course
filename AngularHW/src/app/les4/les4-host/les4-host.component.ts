import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-les4-host',
  templateUrl: './les4-host.component.html',
  styleUrls: ['./les4-host.component.css']
})
export class Les4HostComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

  }

  Logger($event: any): void {
    console.log('Delete row id #' + $event);
  }
}
