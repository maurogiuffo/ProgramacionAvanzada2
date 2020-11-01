import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddEditComponent } from './components/admin/product-add-edit/product-add-edit.component';
import { ProductListComponent } from './components/admin/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { MainPublicDashboardComponent } from './components/main-public-dashboard/main-public-dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component: MainPublicDashboardComponent, pathMatch: 'full'},
  {path: 'dashboard', component: MainPublicDashboardComponent},
  {path: 'cart', component: CartComponent},
  {path: 'product-list', component: ProductListComponent},
  {path: 'product-add-edit', component: ProductAddEditComponent},
  {path: 'product-add-edit/:id', component: ProductAddEditComponent },
  {path: 'login', component: LoginComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
