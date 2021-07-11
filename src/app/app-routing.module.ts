import { NgModule } from '@angular/core';
// 引用根路由
import { RouterModule, Routes } from '@angular/router';
// 引用上層功能
import { KanbanComponent } from './home/kanban/kanban.component';
import { WeblinkComponent } from './home/weblink/weblink.component';

const routes: Routes = [
  { path: 'kanban', component: KanbanComponent},
  { path: 'weblink', component: WeblinkComponent},
  { path: '', component: KanbanComponent },
  // { path: '**', redirectTo: '', pathMatch: 'full' } // 此行取消, 不然沒法使用 demo-routing
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
