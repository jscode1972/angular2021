import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { ControlComponent } from './control/control.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    ControlComponent,
    FooterComponent
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    ControlComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
