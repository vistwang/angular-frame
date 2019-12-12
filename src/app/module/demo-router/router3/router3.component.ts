import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-router3',
  templateUrl: './router3.component.html',
  styleUrls: ['./router3.component.scss']
})
export class Router3Component implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute
  ) { }


  ngOnInit() {
    // console.log(this.activeRoute.snapshot.queryParams.get('id'));
  }
}
