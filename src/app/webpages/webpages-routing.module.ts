import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FlightsComponent } from './flights/flights.component';
import { FlightsBookComponent } from './flights-book/flights-book.component';
import { HotelsComponent } from './hotels/hotels.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'flights', component: FlightsComponent},
  {path: 'flightsbook', component: FlightsBookComponent},
  {path: 'hotels', component: HotelsComponent},
  {
    path: 'auth',
    loadChildren: () => import('../authentication/authentication.module').then(mod => mod.AuthenticationModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../dashboard/dashboard.module').then(mod => mod.DashboardModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebpagesRoutingModule { }
