import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ComponentsModule } from '../components/components.module';
import { PageEditTaskComponent } from './page-edit-task/page-edit-task.component';
import { PageListTaskComponent } from './page-list-task/page-list-task.component';

@NgModule({
  declarations: [PageEditTaskComponent, PageListTaskComponent],
  imports: [CommonModule, PagesRoutingModule, ComponentsModule],
  exports: [PageEditTaskComponent, PageListTaskComponent],
})
export class PagesModule {}
