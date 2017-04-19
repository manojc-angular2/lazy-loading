import { NgModule } from '@angular/core';

import { LazyComponent } from './lazy.component';
import { Lazy1Component } from '../lazy1/lazy1.component';
import { Lazy2Component } from '../lazy2/lazy2.component';
import { LazyRouting } from './lazy.routing';

@NgModule({
    imports: [LazyRouting],
    declarations: [
        LazyComponent,
        Lazy1Component,
        Lazy2Component
    ]
})

export class LazyModule { }