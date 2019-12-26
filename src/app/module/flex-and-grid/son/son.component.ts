import { Component, OnInit, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'flex-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent implements OnInit, DoCheck {

  constructor() { }
  @Input() config;
  ngOnInit() {
    // const nums = [1,2,3,4,5];
    // const xxx = [];
    // for(let i=0; i<nums.length;i++){
    //   for(let j=i+1; j<nums.length; j++){
    //     xxx.push({i,j})
    //   }
    // }

    // console.log(xxx);

  }

  // 这个方法极其耗费性能
  ngDoCheck(): void {
    console.log(this.config);
  }

}
