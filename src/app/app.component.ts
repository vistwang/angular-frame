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
  navigationEnd$: Observable<string>;
  constructor(private router: Router) {

  }
  ngOnInit(): void {
    this.initApp();

    this.navigationEnd$.subscribe((url) => {
      console.log(url);
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

}
