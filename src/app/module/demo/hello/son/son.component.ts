import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.scss']
})
export class SonComponent implements OnInit {
  @Input() inputTemplate;
  constructor() { }

  ngOnInit() {
  }

}
