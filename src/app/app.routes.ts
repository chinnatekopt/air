import { Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';

export const routes: Routes = [
    // {
    //     path: '', redirectTo: 'home', pathMatch: 'full'
    // },
    {
        path: '',
        loadChildren: () => import('./webpages/webpages.module').then(mod => mod.WebpagesModule)
    },
    {path: 'login' , loadChildren: () => import('./authentication/authentication.module').then(mod => mod.AuthenticationModule)}
];
