import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexComponent } from './flex/flex.component';
import { GridComponent } from './grid/grid.component';
import { IndexComponent } from './index/index.component';
import { RouterRoutingModule } from './flex-grid-routing.module';



@NgModule({
  declarations: [FlexComponent, GridComponent, IndexComponent],
  imports: [
    CommonModule,
    RouterRoutingModule
  ]
})
export class FlexAndGridModule { }
