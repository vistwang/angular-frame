import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';

import { CarouselModule } from './component/carousel/carousel.module';
import { IconModule } from './component/icon/icon.module';
import { TextareaModule } from './component/textarea/textarea.module';
import { OnErrorImgModule } from './directive/on-error-img/on-error-img.module';
import { ImageModule } from './component/image/image.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    OnErrorImgModule,
    CarouselModule,
    MatTableModule,
    TextareaModule,
    IconModule,
    ImageModule
  ],
  exports: [
    HttpClientModule,
    OnErrorImgModule,
    CarouselModule,
    MatTableModule,
    MatListModule,
    TextareaModule,
    IconModule,
    ImageModule
  ]
})
export class WebSharedModule { }
