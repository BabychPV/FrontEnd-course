import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MyTableComponent} from './Table/my-table/my-table.component';
import {MyTableHostComponent} from './Table/my-table/my-table-host/my-table-host.component';

@NgModule({
  declarations: [
    AppComponent,
    MyTableComponent,
    MyTableHostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
