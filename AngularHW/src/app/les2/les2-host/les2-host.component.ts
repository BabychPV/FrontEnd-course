import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-les2-host',
  templateUrl: './les2-host.component.html',
  styleUrls: ['./les2-host.component.css']
})
export class Les2HostComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

  }

  Logger($event: any): void {
    console.log('Delete row id #' + $event);
  }
}
