import { AutoUnsubscribe } from "src/app/core/auto-unsubscribe";

import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from "@angular/core";

@Component({
  selector: "onpush-child",
  templateUrl: "./onpush-child.component.html",
  styleUrls: ["./onpush-child.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@AutoUnsubscribe()
export class OnpushChildComponent
  implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  socket;
  constructor(
    private changeRef: ChangeDetectorRef,
  ) {}
  @Input() faArray;
  // @Input() you;
  xxx = 100;
  ngOnInit() {
    // setInterval(() => {
    //   // this.xxx++;
    //   this.changeRef.markForCheck();
    // })
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(1);
  }

  ngAfterViewInit() {
    console.log("child");
  }

  ngOnDestroy() {
    console.log(111);
  }
}
