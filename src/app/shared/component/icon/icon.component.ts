import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'icon-font',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit, AfterViewInit, OnChanges {

  constructor(
    // private viewContainerRef: ViewContainerRef,
    // private renderer: Renderer2,
    // private elementRef: ElementRef,
    ) { }
  @Input() type: string;
  iconSvg;
  // @ViewChild('element', {
  //   static: true
  // }) iconTemplate: ElementRef<any>;

  ngOnInit() {
    this.type = '#' + this.type;
    // this.iconSvg = `<svg class="icon" aria-hidden="true"><use xlink:href="#${this.type}"></<use></svg>`;
    // this.viewContainerRef.createEmbeddedView(`<svg><use xlink:href="#${this.type}"></svg>`, { name: 'nihao' });
  }

  ngAfterViewInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.renderer.setAttribute(this.iconTemplate.nativeElement, 'xlink:href', '#food-pudding');
  }
}
