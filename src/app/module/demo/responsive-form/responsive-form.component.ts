import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-responsive-form',
  templateUrl: './responsive-form.component.html',
  styleUrls: ['./responsive-form.component.scss']
})
export class ResponsiveFormComponent implements OnInit {

  constructor() { }
  myFormGroup;
  name = new FormControl();

  ngOnInit() {
    this.myFormGroup = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
    });
  }

  upDateName() {
    this.name.setValue('小团团');
  }

  onSubmit() {
    debugger;
    console.warn(this.myFormGroup.value);
  }

}
