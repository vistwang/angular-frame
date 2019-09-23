import PNotify from 'pnotify/dist/es/PNotify';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.scss']
})
export class DemoFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
  }
  user: FormGroup;

  ngOnInit() {
    // 初始化表单
    this.user = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(/([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+.[a-zA-Z]{2,4}/)]),
      password: new FormControl('', [Validators.required]),
      repeat: new FormControl('', [Validators.required]),
      address: new FormGroup({
        province: new FormControl(''),
        city: new FormControl(''),
        area: new FormControl(''),
        addr: new FormControl('')
      })
    });
  }

  onChange(e) {

  }

  onSubmit({value, valid}) {
    if (!valid) { return; }
    console.log(JSON.stringify(value));
  }

  alertPnotify1() {
    PNotifyButtons; // Initiate the module. Important!
    PNotify.alert({
      title: 'Over Here1',
      text: 'Check me out. I\'m in a different stack.1',
      type: 'success',
      stack: {
        dir1: 'right',
        dir2: 'up',
        firstpos1: 25,
        firstpos2: 25,
        push: 'top'
      }
    });
  }
  alertPnotify2() {
    PNotifyButtons; // Initiate the module. Important!
    PNotify.alert({
      title: 'Over Here2',
      text: 'Check me out. I\'m in a different stack.',
      type: 'success',
      stack: {
        dir1: 'down',
      dir2: 'right',
      firstpos1: 25,
      firstpos2: 25,
      push: 'top'
      }
    });
  }
  alertPnotify3() {
    PNotifyButtons; // Initiate the module. Important!
    PNotify.alert({
      title: 'Over Here3',
      text: 'Check me out. I\'m in a different stack.',
      type: 'success',
      stack: {
        dir1: 'up',
        dir2: 'left',
      firstpos1: 25,
      firstpos2: 25
      }
    });
  }
  alertPnotify4() {
    PNotifyButtons; // Initiate the module. Important!
    PNotify.alert({
      title: 'Over Here4',
      text: 'Check me out. I\'m in a different stack.',
      type: 'success',
      stack: {
        dir1: 'down',
      firstpos1: 25
      }
    });
  }
  alertPnotify5() {
    PNotifyButtons; // Initiate the module. Important!
    PNotify.alert({
      title: 'Over Here5',
      text: 'Check me out. I\'m in a different stack.',
      type: 'success',
      stack: {
        dir1: 'down',
        dir2: 'left',
        firstpos1: 25,
        firstpos2: 25
      }
    });
  }
}
