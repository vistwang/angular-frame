import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var Viewer: any;
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})

export class ImageComponent implements OnInit {

  constructor(

  ) { }

  @ViewChild('imgload', { static: true }) imgload: ElementRef;


  _Viewer;

  ngOnInit() {
    this._Viewer = new Viewer(this.imgload.nativeElement, {});
  }
}
