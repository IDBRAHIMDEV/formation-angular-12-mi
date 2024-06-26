import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponentComponent } from './components/my-first-component/my-first-component.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { BlogComponent } from './components/site/blog/blog.component';
import { SidebarComponent } from './components/site/sidebar/sidebar.component';
import { ListOfUsersComponent } from './components/site/list-of-users/list-of-users.component';
import { ListOfProductsComponent } from './components/site/list-of-products/list-of-products.component';
import { ProductCardComponent } from './components/site/product-card/product-card.component';
import { CoursesComponent } from './components/courses/courses.component';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './components/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { UserCardComponent } from './components/user-card/user-card.component';
import { ProductsComponent } from './components/products/products.component';
import { ListProductsComponent } from './pages/products/list-products/list-products.component';
import { AddProductComponent } from './pages/products/add-product/add-product.component';
import { EditProductComponent } from './pages/products/edit-product/edit-product.component';
import { ViewProductComponent } from './pages/products/view-product/view-product.component';
import { HomeComponent } from './pages/home/home.component'
@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    NavbarComponent,
    FooterComponent,
    BlogComponent,
    SidebarComponent,
    ListOfUsersComponent,
    ListOfProductsComponent,
    ProductCardComponent,
    CoursesComponent,
    UsersComponent,
    UserCardComponent,
    ProductsComponent,
    ListProductsComponent,
    AddProductComponent,
    EditProductComponent,
    ViewProductComponent,
    HomeComponent
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
