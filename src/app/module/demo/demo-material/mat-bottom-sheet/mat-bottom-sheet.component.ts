import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  templateUrl: './mat-bottom-sheet.component.html',
  styleUrls: ['./mat-bottom-sheet.component.scss']
})
export class MatBottomSheetComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<MatBottomSheetComponent>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit() {
  }

}
