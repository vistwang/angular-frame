import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setInterval(()=>{
      console.log('setInterval');

    }, 10000)
  }

  con() {

  }
}
