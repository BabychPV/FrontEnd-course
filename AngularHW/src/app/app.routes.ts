import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {Les1Component} from './les1';
import {Les2HostComponent} from './les2';
import {Les3HostComponent} from './les3';
import {Les4HostComponent} from './les4';


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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
