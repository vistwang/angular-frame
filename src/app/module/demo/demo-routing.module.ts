import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DemoBabylonjsComponent } from './demo-babylonjs/demo-babylonjs.component';
import { DemoCdkDragComponent } from './demo-cdk-drag/demo-cdk-drag.component';
import { DemoHighchartsComponent } from './demo-highcharts/demo-highcharts.component';
import { DemoHttpComponent } from './demo-http/demo-http.component';
import { DemoMaterialComponent } from './demo-material/demo-material.component';
import { DemoServerComponent } from './demo-server/demo-server.component';
import { DemoThreejsComponent } from './demo-threejs/demo-threejs.component';
import { DemoComponent } from './demo.component';
import { HelloComponent } from './hello/hello.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: DemoComponent },
  { path: 'hello', component: HelloComponent },
  { path: 'drag', component: DemoCdkDragComponent },
  { path: 'material', component: DemoMaterialComponent },
  { path: 'charts', component: DemoHighchartsComponent },
  { path: 'threejs', component: DemoThreejsComponent },
  { path: 'babylonjs', component: DemoBabylonjsComponent },
  { path: 'DemoHttp', component: DemoHttpComponent },
  { path: 'DemoServer', component: DemoServerComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
