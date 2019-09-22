import {
    AfterViewInit, Component, HostBinding, HostListener, OnInit, TemplateRef, ViewChild,
    ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit, AfterViewInit {
  @ViewChild('name', {static: true}) tplRef: TemplateRef<any>;

  @HostBinding('style.color') color: string;
  @HostBinding('style.borderColor') borderColor: string;

  constructor(private vcRef: ViewContainerRef) { }
  myContext = { $implicit: 'implicit默认值', name: '王阳阳' };
  son2 = '<app-son2></app-son2>';

  ngOnInit() {
    this.color = 'blue';
    this.borderColor = 'tomato';
  }

  // 绑定方法
  @HostListener('keydown') onKeydown() {
    this.color = 'red';
    this.borderColor = 'yellow';
  }

  ngAfterViewInit() {
    // 这样tplRef对应的ng-template内容就显示出来了
    this.vcRef.createEmbeddedView(this.tplRef);
  }

}
