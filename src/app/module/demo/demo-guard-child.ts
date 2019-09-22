import { CanActivateChild } from '@angular/router';

export class DemoGuardChild implements CanActivateChild {
    canActivateChild() {
      const loggedIn: boolean = Math.random() < 0.5;
      console.log(loggedIn);
      console.log('DemoGuardChild');
      return true;  // retunrn出true或false true允许进入路由 false不允许进入路由
    }
}
