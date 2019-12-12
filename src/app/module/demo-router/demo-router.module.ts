import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router1Component } from './router1/router1.component';
import { Router2Component } from './router2/router2.component';
import { Router3Component } from './router3/router3.component';
import { Router4Component } from './router4/router4.component';
import { IndexComponent } from './index/index.component';
import { RouterRoutingModule } from './router-routing.module';
import { WebSharedModule } from '@web-shared';



@NgModule({
  declarations: [Router1Component, Router2Component, Router3Component, Router4Component, IndexComponent],
  imports: [
    CommonModule,
    RouterRoutingModule,
    WebSharedModule
  ]
})
export class DemoRouterModule { }
