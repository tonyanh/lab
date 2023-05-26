import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { ManagerProductComponent } from './pages/manager-product/manager-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductDetailComponent,
    ProductItemComponent,
    ProductListComponent,
    LayoutAdminComponent,
    ManagerProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
