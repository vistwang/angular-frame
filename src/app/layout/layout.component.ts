import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // 一个路由插座可以在任何时候组件实例化时发出一个activate消息，并且在组件销毁时发出一个deactivate消息。
  onActivate(e) {
    console.log('activate消息');
    console.log(e);
  }
  onDeactivate(e) {
    console.log('deactivate消息');
    console.log(e);
  }

}
