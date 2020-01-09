import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBottomSheetModule, MatDialogModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DemoServiceNewService, DemoServiceService } from '@service';
import { WebSharedModule } from '@web-shared';

import { CustomElementComponent } from './custom-element/custom-element.component';
import { DemoBabylonjsComponent } from './demo-babylonjs/demo-babylonjs.component';
import { DemoCdkDragComponent } from './demo-cdk-drag/demo-cdk-drag.component';
import { DemoFormComponent } from './demo-form/demo-form.component';
import { DemoHighchartsComponent } from './demo-highcharts/demo-highcharts.component';
import { DemoHttpComponent } from './demo-http/demo-http.component';
import { BujinqiComponent } from './demo-material/bujinqi/bujinqi.component';
import { DemoMaterialComponent } from './demo-material/demo-material.component';
import {
    MatBottomSheetComponent
} from './demo-material/mat-bottom-sheet/mat-bottom-sheet.component';
import { MatDialogComponent } from './demo-material/mat-dialog/mat-dialog.component';
import { OverlayPanelComponent } from './demo-material/overlay-panel/overlay-panel.component';
import { DemoRoutingModule } from './demo-routing.module';
import { DemoServerComponent } from './demo-server/demo-server.component';
import { DemoThreejsComponent } from './demo-threejs/demo-threejs.component';
import { DemoComponent } from './demo.component';
import { HelloComponent } from './hello/hello.component';
import { SonComponent } from './hello/son/son.component';
import { Son2Component } from './hello/son2/son2.component';
import { ResponsiveFormComponent } from './responsive-form/responsive-form.component';
import { DemoOnpushComponent } from './demo-onpush/demo-onpush.component';
import { OnpushChildComponent } from './demo-onpush/onpush-child/onpush-child.component';
import { SocketComponent } from './socket/socket.component';
import { ScreenshotsComponent } from './screenshots/screenshots.component';
import { AsyncAwaitComponent } from './async-await/async-await.component';
import { CurrieFuncComponent } from './currie-func/currie-func.component';

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
    DemoFormComponent,
    MatBottomSheetComponent,
    MatDialogComponent,
    OverlayPanelComponent,
    BujinqiComponent,
    ResponsiveFormComponent,
    DemoOnpushComponent,
    OnpushChildComponent,
    SocketComponent,
    ScreenshotsComponent,
    AsyncAwaitComponent,
    CurrieFuncComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DemoRoutingModule,
    WebSharedModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    MatBottomSheetModule,
    MatDialogModule,
    OverlayModule,
    MatStepperModule
  ],
  exports: [
  ],
  entryComponents: [CustomElementComponent, Son2Component, MatBottomSheetComponent, OverlayPanelComponent],
  providers: [DemoServiceService,
    {provide: DemoServiceNewService, useExisting: DemoServiceService}]
})
export class DemoModule { }
