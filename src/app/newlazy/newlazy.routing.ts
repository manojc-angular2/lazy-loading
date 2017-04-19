import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewlazyComponent } from './newlazy.component';
import { Newlazy1Component } from '../newlazy1/newlazy1.component';
import { Newlazy2Component } from '../newlazy2/newlazy2.component';

const NewlazyRoute: Routes = [{
    path: '',
    component: NewlazyComponent,
    children: [{
        path: '',
        redirectTo: 'component1',
        pathMatch: 'full'
    }, {
        path: 'component1',
        component: Newlazy1Component
    }, {
        path: 'component2',
        component: Newlazy2Component
    }]
}];

export const NewlazyRouting: ModuleWithProviders = RouterModule.forChild(NewlazyRoute);