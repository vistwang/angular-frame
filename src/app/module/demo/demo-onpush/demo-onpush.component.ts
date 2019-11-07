import { HttpClient } from '@angular/common/http';
import {
    ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit
} from '@angular/core';

@Component({
  selector: 'demo-onpush',
  templateUrl: './demo-onpush.component.html',
  styleUrls: ['./demo-onpush.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoOnpushComponent implements OnInit {
  @Input() father;
  count = 0;
  me = {
    name: 'xiaoming',
    age: 23
  }

  asyncData;
  constructor(
    private changeRef: ChangeDetectorRef,
    private httpClient: HttpClient,
    ) {
   }

  ngOnInit() {
    // 宏任务无法更新视图
    setTimeout(() => {
      // this.changeRef.markForCheck();
      this.me.name = "小画"
    }, 2000);

    // 微任务也无法触发检测
    Promise.reject().then(() => {
      this.me.name = "小明"
    })

    this.asyncData = this.httpClient.get('http://localhost:3000/users').subscribe(data => {
      // this.me.age = 1000;
      // this.changeRef.markForCheck();
       return '33333333333'
    })
  }

  changeName() {
    // this.me.name = "雷军"
    console.log(this.count);
    this.httpClient.get('http://localhost:3000/users').subscribe(data => {
      console.log(data);
      this.me.name = '小明' + this.count;
      // this.changeRef.markForCheck();
    })
  }

  changeAge() {
    console.log(this.count);
    this.httpClient.get('http://localhost:3000/users').subscribe(data => {
      console.log(data);
      this.me.age = this.count;
      // this.changeRef.markForCheck();
    })
  }

  changeCount() {
    this.count++;
  }

}
