import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { FlexComponent } from './flex/flex.component';
import { GridComponent } from './grid/grid.component';
import { WaterfallComponent } from './waterfall/waterfall.component';

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
        component: IndexComponent
      },
      {
        path: 'flex', // 登录页立即加载
        component: FlexComponent,
        data: {
            name: 'child1 router'
        }
      },
      {
        path: 'grid',
        component: GridComponent
      },
      {
        path: 'waterfall',
        component: WaterfallComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouterRoutingModule { }
