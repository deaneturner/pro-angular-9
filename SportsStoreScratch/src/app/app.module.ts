import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { StoreComponent } from './store/store.component';
import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './store/checkout-component/checkout-component.component';
import { CartDetailComponent } from './store/cart-detail-component/cart-detail-component.component';
import { StoreFirstGuard } from './store-first.guard';
import { AuthComponent } from './admin/auth/auth.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      {path: 'store', component: StoreComponent, canActivate: [StoreFirstGuard]},
      {path: 'cart', component: CartDetailComponent, canActivate: [StoreFirstGuard]},
      {path: 'checkout', component: CheckoutComponent, canActivate: [StoreFirstGuard]},
      {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
        // ,
        // canActivate: [StoreFirstGuard]
      },
      {path: '**', redirectTo: '/store'}
    ]),
    FormsModule
  ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})

export class AppModule {
}
