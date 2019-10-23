import { FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, TemplatePortalDirective } from '@angular/cdk/portal';
import {
    ChangeDetectorRef, Component, ElementRef, NgZone, OnDestroy, OnInit, ViewChild, ViewContainerRef
} from '@angular/core';
import { MatBottomSheet, MatDialog } from '@angular/material';

import { PeriodicElement } from '../demo-config';
import { MatBottomSheetComponent } from './mat-bottom-sheet/mat-bottom-sheet.component';
import { MatDialogComponent } from './mat-dialog/mat-dialog.component';
import { OverlayPanelComponent } from './overlay-panel/overlay-panel.component';

@Component({
  selector: 'app-demo-material',
  templateUrl: './demo-material.component.html',
  styleUrls: ['./demo-material.component.scss']
})
export class DemoMaterialComponent implements OnInit, OnDestroy {

  constructor(
    private bottomSheet: MatBottomSheet,
    public dialog: MatDialog,
    private focusMonitor: FocusMonitor,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone,
    public overlay: Overlay,
    public viewContainerRef: ViewContainerRef
    ) {}

  ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = this.ELEMENT_DATA;

  animal: string;
  name: string;

  globalOverlayPosition = 50;

  private overlayConnectRef: OverlayRef;

    // FocusMonitor（焦点管理器）
  @ViewChild('element', {
    static: true
  }) element: ElementRef<HTMLElement>;
  @ViewChild('subtree', {
    static: true
  }) subtree: ElementRef<HTMLElement>;

  @ViewChild('connectComponentOrigin', {
  static: true
  }) overlayConnectComponentOrigin: ElementRef<HTMLElement>;


  elementOrigin = this.formatOrigin(null);
  subtreeOrigin = this.formatOrigin(null);

  ngOnInit() {

    this.focusMonitor.monitor(this.element)
        .subscribe(origin => this.ngZone.run(() => {
          this.elementOrigin = this.formatOrigin(origin);
          this.cdr.markForCheck();
        }));
    this.focusMonitor.monitor(this.subtree, true)
        .subscribe(origin => this.ngZone.run(() => {
          this.subtreeOrigin = this.formatOrigin(origin);
          this.cdr.markForCheck();
        }));
  }

  openBottomSheet(): void {
    this.bottomSheet.open(MatBottomSheetComponent);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MatDialogComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  formatOrigin(origin: FocusOrigin): string {
    return origin ? origin + ' focused' : 'blurred';
  }

  /**
   * overlay 在整个屏幕的中间显示
   */
  showOverlayGlobalPanelCenter() {
    // config: OverlayConfig overlay的配置，配置显示位置，和滑动策略
    const config = new OverlayConfig();
    config.positionStrategy = this.overlay.position()
        .global() // 全局显示
        .width('100px')
        .height('100px')
        // .left(`${this.globalOverlayPosition}px`) // 自己控制位置
        .top(`${this.globalOverlayPosition}px`)
        .centerHorizontally(); // 水平居中
        // .centerVertically(); // 垂直居中
    // this.globalOverlayPosition += 30;
    config.hasBackdrop = true; // 设置overlay后面有一层背景, 当然你也可以设置backdropClass 来设置这层背景的class
    const overlayRef = this.overlay.create(config); // OverlayRef, overlay层
    overlayRef.backdropClick().subscribe(() => {
        // 点击了backdrop背景
        overlayRef.dispose();
    });
    // OverlayPanelComponent是动态组件
    // 创建一个ComponentPortal，attach到OverlayRef，这个时候我们这个overlay层就显示出来了。
    overlayRef.attach(new ComponentPortal(OverlayPanelComponent, this.viewContainerRef));
    // 监听overlayRef上的键盘按键事件
    overlayRef.keydownEvents().subscribe((event: KeyboardEvent) => {
        console.log(overlayRef._keydownEventSubscriptions + ' times');
        console.log(event);
    });
  }

  // 依赖某个元素显示
  showOverlayPanelConnectComponent() {
    const strategy = this.overlay.position()
    .flexibleConnectedTo(this.overlayConnectComponentOrigin.nativeElement)
    .withPositions([{
        originX: 'center',
        originY: 'center',
        overlayX: 'center',
        overlayY: 'top',
        offsetX: 0,
        offsetY: 0
    }]); // 这么理解 origin 组件(依附空组件) 的那个点(originX, originY) 和 overlay组件的点(overlayX, overlayY)
    // 重合，从而确定overlay组件显示的位置
    strategy.withLockedPosition(true);
    const config = new OverlayConfig({positionStrategy: strategy});
    config.scrollStrategy = this.overlay.scrollStrategies.reposition(); // 更随滑动的策略
    this.overlayConnectRef = this.overlay.create(config);
    this.overlayConnectRef.attach(new ComponentPortal(OverlayPanelComponent, this.viewContainerRef));

  }
  dismissOverlayPanelConnectComponent() {
    if (this.overlayConnectRef && this.overlayConnectRef.hasAttached()) {
        this.overlayConnectRef.dispose();
    }
  }


  ngOnDestroy() {
    this.focusMonitor.stopMonitoring(this.element);
    this.focusMonitor.stopMonitoring(this.subtree);
  }

}
