import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPublicDashboardComponent } from './components/main-public-dashboard/main-public-dashboard.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductManagementSectionComponent } from './components/product-management-section/product-management-section.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { CategoryListComponent } from './components/admin/category-list/category-list.component';
import { CategoryAddEditComponent } from './components/admin/category-add-edit/category-add-edit.component';
import { ProductListComponent } from './components/admin/product-list/product-list.component';
import { ProductAddEditComponent } from './components/admin/product-add-edit/product-add-edit.component';
import { AuthInterceptor } from './auth/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MainPublicDashboardComponent,
    CartComponent,
    ProductManagementSectionComponent,
    PageNotFoundComponent,
    LoginComponent,
    CategoryListComponent,
    CategoryAddEditComponent,
    ProductListComponent,
    ProductAddEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [   {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
