import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// 引用網路功能 (不可刪除)
import { HttpClientModule, HttpClient } from '@angular/common/http';
// 引用自訂服務
import { HttpService } from './services/common/http.service';
// 引用開發模組 (可直接使用所有子元件)
import { LayoutModule } from './layout/layout.module';
import { HomeModule } from './home/home.module';
import { DemoModule } from './demo/demo.module';
import { DailyModule } from './daily/daily.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,  AppRoutingModule,                  // <-- 引用系統模組 (自動產生)
    HttpClientModule,                                  // <-- 引用網路功能 (不可刪除)
    HomeModule, LayoutModule, DemoModule, DailyModule  // <-- 引用開發模組 (手動加入外部模組, 可直接使用所有子元件)
  ],
  providers: [HttpService],                            // <-- 引用網路服務
  bootstrap: [AppComponent]
})
export class AppModule { }
