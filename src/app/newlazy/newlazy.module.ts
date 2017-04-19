import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewlazyComponent } from './newlazy.component';
import { Newlazy1Component } from '../newlazy1/newlazy1.component';
import { Newlazy2Component } from '../newlazy2/newlazy2.component';
import { NewlazyRouting } from './newlazy.routing';

@NgModule({
  imports: [
    CommonModule,
    NewlazyRouting
  ],
  declarations: [
    NewlazyComponent,
    Newlazy1Component,
    Newlazy2Component    
  ]
})
export class NewlazyModule { }
