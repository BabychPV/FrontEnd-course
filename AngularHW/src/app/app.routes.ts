import {Routes} from '@angular/router';


import {Les1Component} from './les1/index';
import {Les2HostComponent} from './les2/index';
import {Les3HostComponent} from './les3/index';
import {Les4HostComponent} from './les4/index';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'HomeWork-01',
    pathMatch: 'full'
  },
  {
    path: 'HomeWork-01',
    component: Les1Component
  },
  {
    path: 'HomeWork-02',
    component: Les2HostComponent
  },
  {
    path: 'HomeWork-03',
    component: Les3HostComponent
  },
  {
    path: 'HomeWork-04',
    component: Les4HostComponent
  }

];
