import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-router1',
  templateUrl: './router1.component.html',
  styleUrls: ['./router1.component.css']
})
export class Router1Component implements OnInit {

  constructor(private domSanitizer: DomSanitizer ) { }
  name: any = 'router1     works!';
  ngOnInit() {
    this.name = this.name.replace(/\s/g,"&nbsp;");
  }

}
