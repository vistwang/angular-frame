import { HttpService } from 'src/app/core/service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-http',
  templateUrl: './demo-http.component.html',
  styleUrls: ['./demo-http.component.scss']
})
export class DemoHttpComponent implements OnInit {

  constructor(
    private httpService: HttpService
  ) { }
  pageData;

  ngOnInit() {
    this.httpService.HomePageData()
    .subscribe((data) => this.pageData = data);
  }

}
