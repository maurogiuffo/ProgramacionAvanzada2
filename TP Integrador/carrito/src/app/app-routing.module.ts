import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryAddEditComponent } from './components/admin/category-add-edit/category-add-edit.component';
import { CategoryListComponent } from './components/admin/category-list/category-list.component';
import { ProductAddEditComponent } from './components/admin/product-add-edit/product-add-edit.component';
import { ProductListComponent } from './components/admin/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { MainPublicDashboardComponent } from './components/main-public-dashboard/main-public-dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'dashboard', component: MainPublicDashboardComponent},
  {path: 'cart', component: CartComponent},
  {path: 'category-list', component: CategoryListComponent},
  {path: 'category-add-edit', component: CategoryAddEditComponent},
  {path: 'category-add-edit/:id', component: CategoryAddEditComponent},
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
