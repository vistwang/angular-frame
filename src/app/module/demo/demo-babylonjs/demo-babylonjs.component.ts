import 'babylonjs-materials';

import { Component, OnInit } from '@angular/core';
import { BabyionService } from '@web-core';

@Component({
  selector: 'app-demo-babylonjs',
  templateUrl: './demo-babylonjs.component.html',
  styleUrls: ['./demo-babylonjs.component.scss']
})
export class DemoBabylonjsComponent implements OnInit {

  constructor(
    private babyionService: BabyionService
  ) { }

  ngOnInit() {
    this.babyionService.createScene('renderCanvas');
    this.babyionService.animate();
  }

}
