import {
    ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'onpush-child',
  templateUrl: './onpush-child.component.html',
  styleUrls: ['./onpush-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class OnpushChildComponent implements OnInit, OnChanges {

  constructor(private changeRef: ChangeDetectorRef) { }
  @Input() faArray;
  // @Input() you;
  xxx=100;
  ngOnInit() {
    // setInterval(() => {
    //   // this.xxx++;
    //   this.changeRef.markForCheck();
    // })
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log(1);


  }

}
