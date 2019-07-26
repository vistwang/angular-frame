import { Injectable } from '@angular/core';

@Injectable(
  // {
  //   providedIn: 'root'
  // }
)
export class DemoServiceService {

  constructor() { }
  arr = [
    {name: '小米', id: 1},
    {name: '魅族', id: 2},
    {name: '努比亚', id: 3},
  ];
}
