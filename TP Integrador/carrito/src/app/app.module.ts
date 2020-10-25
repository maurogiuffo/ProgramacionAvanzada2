import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPublicDashboardComponent } from './components/main-public-dashboard/main-public-dashboard.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductManagementSectionComponent } from './components/product-management-section/product-management-section.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { CatergoryListComponent } from './components/catergory-list/catergory-list.component';
import { CategoryListComponent } from './components/category-list/category-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPublicDashboardComponent,
    CartComponent,
    ProductManagementSectionComponent,
    PageNotFoundComponent,
    LoginComponent,
    CatergoryListComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
