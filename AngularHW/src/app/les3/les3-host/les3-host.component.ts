import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-les3-host',
  templateUrl: './les3-host.component.html',
  styleUrls: ['./les3-host.component.css']
})
export class Les3HostComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

  }

  Logger($event: any): void {
    console.log('Delete row id #' + $event);
  }
}
