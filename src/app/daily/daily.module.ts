import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// 若沒有 FormsModule => 子元件使用 ngModel 會失敗
import { FormsModule } from '@angular/forms'; 
// 引用巢狀元件
import { DailyRoutingModule } from './daily-routing.module';
import { DailyComponent } from './daily.component';
import { HealthComponent } from './health/health.component';

@NgModule({
  declarations: [
    DailyComponent,
    HealthComponent
  ],
  imports: [
    CommonModule,
    FormsModule,       // <-- 若沒有 FormsModule => 子元件使用 ngModel 會失敗
    DailyRoutingModule
  ]
})
export class DailyModule { }
