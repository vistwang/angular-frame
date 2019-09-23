import {
    Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild
} from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {

  constructor() { }

  @Input() maxHeight = 100;
  @Output() valChange = new EventEmitter();
  @ViewChild('text', {static: true }) text: ElementRef;
  @ViewChild('text1', {static: true }) text1: ElementRef;
  // tslint:disable-next-line:no-input-rename
  @Input('value') val = '';

  ngOnInit() {

  }

  onChange() {
    this.reset();
    setTimeout(() => {
      this.valChange.emit(this.val);
      this.reset();
    }, 0);
  }
    reset() {
        this.text1.nativeElement.style.width = (this.text.nativeElement.scrollWidth + 2) + 'px';
        if (this.text1.nativeElement.scrollHeight < this.maxHeight) {
          this.text.nativeElement.style.height = (this.text1.nativeElement.scrollHeight + 2) + 'px';
        }
    }

}
