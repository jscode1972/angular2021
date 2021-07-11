import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// 引用開發模組
import { DemoComponent } from './demo.component';
import { FormComponent } from './form/form.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: 'demo', 
    component: DemoComponent, 
    children: [  { path: 'form', component: FormComponent},
                 { path: 'layout', component: LayoutComponent},
                 { path: '', component: FormComponent },
                 { path: '**', redirectTo: '', pathMatch: 'full' } 
              ]
  },
  { path: '', redirectTo: 'demo', pathMatch: 'full'  },
  //{ path: '**', component: DemoComponent}  // 不要設定以免影響其他子路由
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
