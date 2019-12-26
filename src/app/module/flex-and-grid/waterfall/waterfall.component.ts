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
    // return '#' + Math.floor(Math.random()*(2<<23)).toString(16);

    return '#'+(Math.random()*0xffffff<<0).toString(16);

    // return  '#' + ((color) => {
    //   return (color +=  '0123456789abcdef'[Math.floor(Math.random()*16)])
    //     && (color.length == 6) ?  color : arguments.callee(color);
    //   })('');
    // }
  }

}
