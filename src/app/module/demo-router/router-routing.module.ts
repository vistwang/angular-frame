import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { Router1Component } from './router1/router1.component';
import { Router2Component } from './router2/router2.component';
import { Router3Component } from './router3/router3.component';
import { Router4Component } from './router4/router4.component';

const routes: Routes = [
  {
    path: '',
    // redirectTo: 'index', pathMatch: 'full',
    children: [
      {
        path: '',
        redirectTo: 'index', pathMatch: 'full',
      },
      {
        path: 'index',
        component: IndexComponent
      },
      {
        path: 'index/:id',
        component: Router3Component
      },
      {
        path: 'child1', // 登录页立即加载
        component: Router1Component,
        data: {
            name: 'child1 router'
        }
      },
      {
        path: 'child2',
        component: Router2Component
      },
      {
        path: 'child3',
        component: Router3Component
      },
      {
        path: 'child3/:id',
        component: Router3Component
      },
      {
        path: 'child4',
        component: Router4Component
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouterRoutingModule { }
