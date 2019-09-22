import { CanDeactivate } from '@angular/router';

export class DemoLeaveGuard implements CanDeactivate<any> {
  canDeactivate() {
      console.log('DemoLeaveGuard');
      return true;  // retunrn出true或false true允许进入路由 false不允许进入路由
    }
}
