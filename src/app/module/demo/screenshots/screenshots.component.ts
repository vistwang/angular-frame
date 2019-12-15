import { Component, OnInit, ViewChild } from '@angular/core';
import { ScreenshotsService } from '@web-core';

@Component({
  selector: 'app-screenshots',
  templateUrl: './screenshots.component.html',
  styleUrls: ['./screenshots.component.scss']
})
export class ScreenshotsComponent implements OnInit {

  constructor( private screenshotsService: ScreenshotsService) { }

  ngOnInit() {
  }

  @ViewChild('imgDom') imgDom;

  onDowload() {
    this.screenshotsService.download('.xxxxxxx', 'hello');
  }


  onPrint() {
    this.screenshotsService.print('.screenshotsImgDom');
  }

  onScreenshots() {
    this.screenshotsService.screenshots('.xxxxxxx', '.father');
  }

}
