import { CanActivate } from '@angular/router';

export class DemoGuard implements CanActivate {
    canActivate() {
      const loggedIn: boolean = Math.random() < 0.5;
      console.log(loggedIn);
      console.log('DemoGuard');
      return true;  // retunrn出true或false true允许进入路由 false不允许进入路由
    }
}
