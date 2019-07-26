import { Component, Inject, OnInit } from '@angular/core';
import { DemoServiceNewService, DemoServiceService } from '@service';

import { MY_DI_TOKEN } from '../useValue';

@Component({
  selector: 'app-demo-server',
  templateUrl: './demo-server.component.html',
  styleUrls: ['./demo-server.component.scss'],
  providers: [{ provide: MY_DI_TOKEN, useValue: 'test useValue' }]
  // providers表示服务提供商列表
  // {provider: DemoServiceService, useClass: DemoServiceService} DI令牌，服务提供商提供服务的方式
})
export class DemoServerComponent implements OnInit {

  constructor(
    private demoServiceService: DemoServiceService,
    private demoServiceNewService: DemoServiceNewService,
    @Inject(MY_DI_TOKEN) myTitle: string
    ) {
      this.title = myTitle;
    }
  arr;
  arr2;
  title;
  // 服务提供商 四中类别的服务提供商：useClass、useExising、useValue、useFactory，后面会一一详细讲到
  ngOnInit() {

    this.arr = this.demoServiceService.arr ? this.demoServiceService.arr : [];
    this.arr2 = this.demoServiceNewService.arr ? this.demoServiceNewService.arr : [];
  }

}
