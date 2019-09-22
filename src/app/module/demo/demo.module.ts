import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatToolbarModule
} from '@angular/material';
import { DemoServiceNewService, DemoServiceService } from '@service';
import { WebSharedModule } from '@web-shared';

import { CustomElementComponent } from './custom-element/custom-element.component';
import { DemoBabylonjsComponent } from './demo-babylonjs/demo-babylonjs.component';
import { DemoCdkDragComponent } from './demo-cdk-drag/demo-cdk-drag.component';
import { DemoFormComponent } from './demo-form/demo-form.component';
import { DemoHighchartsComponent } from './demo-highcharts/demo-highcharts.component';
import { DemoHttpComponent } from './demo-http/demo-http.component';
import { DemoMaterialComponent } from './demo-material/demo-material.component';
import { DemoRoutingModule } from './demo-routing.module';
import { DemoServerComponent } from './demo-server/demo-server.component';
import { DemoThreejsComponent } from './demo-threejs/demo-threejs.component';
import { DemoComponent } from './demo.component';
import { HelloComponent } from './hello/hello.component';
import { SonComponent } from './hello/son/son.component';
import { Son2Component } from './hello/son2/son2.component';

@NgModule({
  declarations: [
    HelloComponent,
    DemoCdkDragComponent,
    DemoMaterialComponent,
    CustomElementComponent,
    DemoHighchartsComponent,
    DemoThreejsComponent,
    DemoBabylonjsComponent,
    DemoHttpComponent,
    DemoComponent,
    SonComponent,
    Son2Component,
    DemoServerComponent,
    DemoFormComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    WebSharedModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  exports: [
  ],
  entryComponents: [CustomElementComponent, Son2Component],
  providers: [DemoServiceService,
    {provide: DemoServiceNewService, useExisting: DemoServiceService}]
})
export class DemoModule { }
