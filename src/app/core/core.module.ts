import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';

import { throwIfAlreadyLoaded } from './module-import-guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class WebCoreModule { // 守卫会禁止创建单例服务的多个实例。
  constructor( @Optional() @SkipSelf() parentModule: WebCoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
