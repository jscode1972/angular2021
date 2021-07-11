import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// 引用開發模組
import { DailyComponent } from './daily.component';
import { HealthComponent } from './health/health.component';

const routes: Routes = [
  { path: 'daily', 
    component: DailyComponent, 
    children: [  { path: 'health', component: HealthComponent},
                 { path: '', component: HealthComponent },
                 //{ path: '**', component: DemoComponent}  // 不要設定以免影響其他子路由
              ]
  },
  { path: '', redirectTo: 'demo', pathMatch: 'full'  },
  { path: '**', component: HealthComponent}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyRoutingModule { }
