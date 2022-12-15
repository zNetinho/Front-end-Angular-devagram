import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./shared/views/pages/page-login/page-login.module').then(m => m.PageLoginModule)
  },
  {
    path: '',
    loadChildren: () => import('./shared/views/pages/page-login/page-login.module').then(m => m.PageLoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
