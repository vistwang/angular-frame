import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image.component';
import { NgViewerModule } from 'ng-viewer';

@NgModule({
  declarations: [ImageComponent],
  imports: [
    CommonModule,
    NgViewerModule,
  ],
  exports: [
    ImageComponent
  ]
})
export class ImageModule { }
