import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin.component';

const router = RouterModule.forChild([
  {path: 'auth', component: AuthComponent},
  { path: 'main', component: AdminComponent },
  {path: '**', redirectTo: 'auth'}
]);

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    router
  ]
})
export class AdminModule { }
