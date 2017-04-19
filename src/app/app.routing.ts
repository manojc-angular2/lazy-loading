import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EagerComponent } from './eager/eager.component';

const appRoute: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }, {
        path: 'home',
        component: EagerComponent
    }, {
        path: 'lazy',
        loadChildren: './lazy/lazy.module#LazyModule'
    }, {
        path: 'newlazy',
        loadChildren: './newlazy/newlazy.module#NewlazyModule'
    }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoute);