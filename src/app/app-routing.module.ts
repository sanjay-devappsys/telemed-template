import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/page-one', pathMatch: 'full' },
  { path: 'page-one', loadChildren: () => import('./components/page-one/page-one.module').then(m => m.PageOneModule) },
  { path: 'page-two', loadChildren: () => import('./components/page-two/page-two.module').then(m => m.PageTwoModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
