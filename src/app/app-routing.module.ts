import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    loadChildren: () =>
      import('./pages/pages.module').then((babibu) => babibu.PagesModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./errors/errors.module').then((babibu) => babibu.ErrorsModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
