import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './module/login/login.component';

const routes: Routes = [
  {
    path: '',
    children: [
      // {
      //   path: '',
      //   redirectTo: 'login', pathMatch: 'full'
      // },
      {
        path: 'index', // 登录页立即加载
        component: LoginComponent
      },
      {
        path: '',
        component: LayoutComponent,
        children: [
          // {
          //   path: '',
          //   redirectTo: 'demo', pathMatch: 'full'
          // },
          {
            path: 'demo',
            loadChildren: () => import('./module/demo/demo.module').then(m => m.DemoModule)
          },
          {
            path: 'router',
            loadChildren: () => import('./module/demo-router/demo-router.module').then(r => r.DemoRouterModule)
          },
          {
            path: 'flex-grid',
            loadChildren: () => import('./module/flex-and-grid/flex-and-grid.module').then(r => r.FlexAndGridModule)
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
