import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WebSharedModule } from '@web-shared';

import { LayoutComponent } from './layout.component';
import { WebHeaderComponent } from './components/web-header/web-header.component';
import { WebNavbarComponent } from './components/web-navbar/web-navbar.component';
import { LogoComponent } from './components/web-header/logo/logo.component';

@NgModule({
  declarations: [LayoutComponent, WebHeaderComponent, WebNavbarComponent, LogoComponent],
  imports: [
    CommonModule,
    RouterModule,
    WebSharedModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
