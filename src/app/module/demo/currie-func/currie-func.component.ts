import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currie-func',
  templateUrl: './currie-func.component.html',
  styleUrls: ['./currie-func.component.scss']
})
export class CurrieFuncComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    function curry(fn) {
      var args = Array.prototype.slice.call(arguments, 1);
      return function() {
          var newArgs = args.concat(Array.prototype.slice.call(arguments));
          return fn.apply(this, newArgs);
      }
    }

    // 可实现分布传参数
    function curry2(fn, args?) {
      var length = fn.length;
      var args = args || [];
      return function(){
          var newArgs = args.concat(Array.prototype.slice.call(arguments));
          if(newArgs.length < length){
              return curry2.call(this,fn,newArgs);
          }else{
              return fn.apply(this,newArgs);
          }
      }
    }


    function multiFn(a,b,c) {
      // return arg.length ? arg.reduce((a, b) => a*b) : 0;
      return a*b*c;
    }

    var multi: any = curry(multiFn);
    var multi2: any = curry2(multiFn);

    console.log(multi(2, 3, 4));
    console.log('multi2');
    console.log(multi2(2,3,4));
    console.log(multi2(2)(3,4));
    console.log(multi2(2)(3)(4));
    console.log(multi2(2,3)(4));


    // 比较两个 NaN 是否相同
    function eqNaN(a, b) {
      console.log(a===a);

      if(a !== a) return b !== b;
    }

    console.log(eqNaN({}, {name: 10}));

    function argus(...arg) {
      return arguments.length;
    }

    console.log(argus.length);
    console.log(argus());
    console.log(argus(1));
    console.log(argus(1,2,3));



  }
}
