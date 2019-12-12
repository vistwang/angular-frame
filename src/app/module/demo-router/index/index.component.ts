import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    ) { }

  ngOnInit() {
    console.log(this.activeRoute.snapshot.queryParams.get('id'));
  }

  btnClick1(){
    this.router.navigate(['../index'], {relativeTo: this.activeRoute});
  }
  btnClick2(){
    this.router.navigate(['../child1'], {relativeTo: this.activeRoute});
  }
  btnClick3(){
    this.router.navigate(['../child2'], {relativeTo: this.activeRoute});
  }
  btnClick4(){
    this.router.navigate(['../child3'], {relativeTo: this.activeRoute});
  }
  btnClick5(){
    this.router.navigate(['/router/child4'], { queryParams: { page: 1 }});
  }
  btnClick6(){
    this.router.navigate(['../index', {name: 10}], {relativeTo: this.activeRoute});
  }

  handleSelect(e) {
    this.router.navigate(['/router/child4']);
  }

}
