import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {Les3Component, Les3HostComponent} from '../index';


@NgModule({
  declarations: [Les3HostComponent, Les3Component],
  imports: [
    CommonModule, FormsModule
  ]
})
export class Les3Module {
}
