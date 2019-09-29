import { FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';
import {
    ChangeDetectorRef, Component, ElementRef, NgZone, OnDestroy, OnInit, ViewChild
} from '@angular/core';
import { MatBottomSheet, MatDialog } from '@angular/material';

import { PeriodicElement } from '../demo-config';
import { MatBottomSheetComponent } from './mat-bottom-sheet/mat-bottom-sheet.component';
import { MatDialogComponent } from './mat-dialog/mat-dialog.component';

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
    private ngZone: NgZone
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

    // FocusMonitor（焦点管理器）
  @ViewChild('element', {
    static: true
  }) element: ElementRef<HTMLElement>;
  @ViewChild('subtree', {
    static: true
  }) subtree: ElementRef<HTMLElement>;

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


  ngOnDestroy() {
    this.focusMonitor.stopMonitoring(this.element);
    this.focusMonitor.stopMonitoring(this.subtree);
  }

}
