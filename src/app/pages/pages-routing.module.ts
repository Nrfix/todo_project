import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListTaskComponent } from './page-list-task/page-list-task.component';
import { PageEditTaskComponent } from './page-edit-task/page-edit-task.component';

const routes: Routes = [
  {
    path: '',
    component: PageListTaskComponent,
  },
  { path: 'edit', component: PageEditTaskComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
