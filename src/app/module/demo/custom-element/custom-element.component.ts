import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-custom-element',
  template: `
    <p>
    <button (click)="btnClick()"></button>
      custom-element works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Native
})
export class CustomElementComponent implements OnInit {

  constructor() { }

  btnClick() {
    console.log('custom-element');
  }

  ngOnInit() {
  }

}
