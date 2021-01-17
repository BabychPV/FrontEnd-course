import {Component} from '@angular/core';

const VALUES = [
  'Hello World', 'Привет Мир', 'Привіт Світ', 'Hola Mundo', 'Bonjour le monde', 'Hallo Welt', 'Ciaomondo', 'Witaj świecie', 'Hej världen', 'Pozdravljen, svet', 'Прывітанне Сусвет'];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  vList: string[] = VALUES;
}
