import { Injectable } from '@angular/core';

import { DemoModule } from './demo.module';

@Injectable({
  providedIn: DemoModule // 只有当消费方导入了 DemoModule 时才让 DemoService 在应用中生效
})
export class DemoService {

  constructor() { }
}
