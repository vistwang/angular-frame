import { Observable, of } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'web';
  requestIndexedDB;
  navigationEnd$: Observable<string>;
  constructor(private router: Router) {

  }
  ngOnInit(): void {
    this.initApp();

    this.initIndexedDB();
    this.navigationEnd$.subscribe((url) => {
      console.log('当前路由：' + url);
    });

    // if (typeof Worker !== 'undefined') {
    //   // Create a new
    //   const worker = new Worker('./app.worker', { type: 'module' });
    //   worker.onmessage = ({ data }) => {
    //     console.log(`page got message: ${data}`);
    //   };
    //   worker.postMessage('hello');
    // } else {
    //   // Web Workers are not supported in this environment.
    //   // You should add a fallback so that your program still executes correctly.
    // }

  }

  initApp() {
    // url导航顺利结束事件
    this.navigationEnd$ = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      switchMap((event: NavigationEnd) => of(event.url)
    ));
  }

  initIndexedDB() {
    this.requestIndexedDB = window.indexedDB.open('angular_frame', 1);
    // 成功打开数据库
    this.requestIndexedDB.onsuccess = (event) => {
      console.log('数据库打开成功');
    };
    // 事件表示打开数据库失败
    this.requestIndexedDB.onerror = (event) => {
      console.log('数据库打开报错');
    };
    // 如果指定的版本号，大于数据库的实际版本号，就会发生数据库升级事件upgradeneeded。
    this.requestIndexedDB.onupgradeneeded = (event) => {
      console.log('数据库升级');
    };
  }

}
