import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor() { }

  config= {
    name: '小明',
    age: 14,
    hobby: ['篮球', '足球', '乒乓球']
  }

  ngOnInit() {
    setTimeout(() => {
      this.config.age = 25;
    }, 3000);
  }

}
