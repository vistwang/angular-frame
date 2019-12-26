import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexComponent } from './flex/flex.component';
import { GridComponent } from './grid/grid.component';
import { IndexComponent } from './index/index.component';
import { RouterRoutingModule } from './flex-grid-routing.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { SonComponent } from './son/son.component';
import { WaterfallComponent } from './waterfall/waterfall.component'

@NgModule({
  declarations: [FlexComponent, GridComponent, IndexComponent, SonComponent, WaterfallComponent],
  imports: [
    CommonModule,
    RouterRoutingModule,
    GoogleMapsModule
  ]
})
export class FlexAndGridModule { }
