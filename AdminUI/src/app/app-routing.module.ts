import { OrdersComponent } from './dashboard/orders/orders.component';
import { ProductComponent } from './dashboard/product/product.component';
import { CategoryComponent } from './dashboard/category/category.component';
import { RegisterComponent } from './register/register.component';
import { AdminGuard } from './guard/admin.guard';
import { UsersComponent } from './dashboard/users/users.component';
import { AuthGuard } from './guard/auth.guard';
import { UnauthGuard } from './guard/unauth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
        component: AuthComponent,
        // canActivate: [UnauthGuard],
  },
  {
    path: 'register',
        component: RegisterComponent,
        // canActivate: [UnauthGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    // canActivate: [AuthGuard],
    children: [
        {
          path: 'users',
          component: UsersComponent,
          // canActivate: [AdminGuard],
        },
        {
          path: 'category',
          component: CategoryComponent,
          // canActivate: [AdminGuard],
        },
        {
          path: 'product',
          component: ProductComponent,
          // canActivate: [AdminGuard],
        },
        {
          path: 'orders',
          component: OrdersComponent,
          // canActivate: [AdminGuard],
        },
    ],
},
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
