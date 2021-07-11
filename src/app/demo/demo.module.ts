import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// 若沒有 FormsModule => 子元件使用 ngModel 會失敗
import { FormsModule } from '@angular/forms'; 
// 引用子路由
import { DemoRoutingModule } from './demo-routing.module';
// 引用巢狀元件
import { DemoComponent } from './demo.component';
import { FormComponent } from './form/form.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    DemoComponent, FormComponent, LayoutComponent
  ], 
  imports: [        
    CommonModule, 
    FormsModule,       // <-- 若沒有 FormsModule => 子元件使用 ngModel 會失敗
    DemoRoutingModule
  ], 
  exports: [         
    DemoComponent, FormComponent, LayoutComponent
  ]
})
export class DemoModule { }
