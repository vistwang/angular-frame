import { Component, OnInit } from '@angular/core';
import { DemoServiceService } from '@service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor(private demoServiceService: DemoServiceService) { }

  ngOnInit() {
  }

  father = {
    name: '我是fathername'
  }

  btnClick() {
    this.demoServiceService.arr.push({
      name: '中兴', id: 4,
    });
  }

}
