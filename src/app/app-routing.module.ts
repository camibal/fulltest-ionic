import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guard/login.guard';
import { StartGuard } from './guard/start.guard';

const routes: Routes = [
  {
    path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule), canActivate: [StartGuard]
  },
  {
    path: '',
    loadChildren: () => import('./index/index.module').then(m => m.IndexModule), canActivate: [LoginGuard]
  },
  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
