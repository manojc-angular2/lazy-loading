import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LazyComponent } from './lazy.component';
import { Lazy1Component } from '../lazy1/lazy1.component';
import { Lazy2Component } from '../lazy2/lazy2.component';

const LazyRoute: Routes = [{
    path: '',
    component: LazyComponent,
    children: [{
        path: '',
        redirectTo: 'component1',
        pathMatch: 'full'
    }, {
        path: 'component1',
        component: Lazy1Component
    }, {
        path: 'component2',
        component: Lazy2Component
    }]
}];

export const LazyRouting: ModuleWithProviders = RouterModule.forChild(LazyRoute);