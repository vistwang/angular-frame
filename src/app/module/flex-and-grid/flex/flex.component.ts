import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.scss']
})
export class FlexComponent implements OnInit {

  constructor() { }

  renderHeight() {
    return Math.floor(Math.random()*(100 - 300) + 300) + 'px';
  }
  renderColor() {
    return '#' + Math.floor(Math.random()*(2<<23)).toString(16);
  }

  ngOnInit() {
  }


}
