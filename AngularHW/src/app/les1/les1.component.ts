import {Component, OnInit} from '@angular/core';

const VALUES = [
  'Hello World', 'Привет Мир', 'Привіт Світ', 'Hola Mundo', 'Bonjour le monde', 'Hallo Welt', 'Ciaomondo', 'Witaj świecie', 'Hej världen', 'Pozdravljen, svet', 'Прывітанне Сусвет'];


@Component({
  selector: 'app-les1',
  templateUrl: './les1.component.html',
  styleUrls: ['./les1.component.css']
})
export class Les1Component implements OnInit {
  vList: string[] = VALUES;

  constructor() {
  }

  ngOnInit(): void {
  }
}
