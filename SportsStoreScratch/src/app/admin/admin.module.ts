import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin.component';
import { AuthGuard } from '../auth.guard';

const router = RouterModule.forChild([
  {path: 'auth', component: AuthComponent},
  { path: 'main', component: AdminComponent, canActivate: [AuthGuard] },
  {path: '**', redirectTo: 'auth'}
]);

@NgModule({
  imports: [
    CommonModule,
    router
  ],
  declarations: [AdminComponent],
  providers: [AuthGuard]
})
export class AdminModule { }
