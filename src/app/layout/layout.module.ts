import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WebSharedModule } from '@web-shared';

import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    WebSharedModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
