import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';

import { CarouselModule } from './component/carousel/carousel.module';
import { OnErrorImgModule } from './directive/on-error-img/on-error-img.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    OnErrorImgModule,
    CarouselModule,
    MatTableModule
  ],
  exports: [
    HttpClientModule,
    OnErrorImgModule,
    CarouselModule,
    MatTableModule,
    MatListModule
  ]
})
export class WebSharedModule { }
