import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashnavComponent } from './dashnav/dashnav.component';

const routes: Routes = [
  {path:'',component:DashnavComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
