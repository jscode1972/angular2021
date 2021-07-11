import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanComponent } from './kanban/kanban.component';
import { WeblinkComponent } from './weblink/weblink.component';

@NgModule({
  declarations: [
    KanbanComponent,
    WeblinkComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    KanbanComponent,
    WeblinkComponent
  ]
})
export class HomeModule { }
