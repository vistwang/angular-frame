import { Component, OnInit } from '@angular/core';
import { max } from 'rxjs/operators';

@Component({
  selector: 'app-waterfall',
  templateUrl: './waterfall.component.html',
  styleUrls: ['./waterfall.component.scss']
})
export class WaterfallComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  renderHeight() {
    return Math.floor(Math.random()*(100 - 400) + 400) + 'px';
  }
  renderColor() {
    return '#' + Math.floor(Math.random()*(2<<23)).toString(16);
  }

}
