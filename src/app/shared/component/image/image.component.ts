import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})

export class ImageComponent implements OnInit {

  constructor(

  ) { }

  @ViewChild('imgload', { static: true }) imgload: ElementRef;

  ngOnInit() {

  }
}
