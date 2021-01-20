import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {Les4Component, Les4HostComponent} from '../index';


@NgModule({
  declarations: [Les4HostComponent, Les4Component],
  imports: [
    CommonModule, FormsModule
  ]
})
export class Les4Module {
}
