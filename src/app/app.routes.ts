import { Routes } from '@angular/router';

export const routes: Routes = [
    // {
    //     path: '', redirectTo: 'home', pathMatch: 'full'
    // },
    {
        path: '',
        loadChildren: () => import('./webpages/webpages.module').then(mod => mod.WebpagesModule)
    },
];
