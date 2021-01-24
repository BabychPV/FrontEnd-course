import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routes';
import {Les1Module} from './les1/les1.modules/les1.module';
import {Les2Module} from './les2/les2.modules/les2.module';
import {Les3Module} from './les3/les3.modules/les3.module';
import {Les4Module} from './les4/les4.modules/les4.module';
import { Les5Modules } from './les5&6/les5.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Les1Module,
    Les2Module,
    Les3Module,
    Les4Module,
    Les5Modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
