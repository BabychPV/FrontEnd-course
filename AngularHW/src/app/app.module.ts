import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {routes} from './app.routes';
import {Les1Module} from './les1/les1.modules/les1.module';
import {Les2Module} from './les2/les2.modules/les2.module';
import {Les3Module} from './les3/les3.modules/les3.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    Les1Module,
    Les2Module,
    Les3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
