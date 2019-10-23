import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bujinqi',
  templateUrl: './bujinqi.component.html',
  styleUrls: ['./bujinqi.component.scss']
})
export class BujinqiComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder) { }

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
