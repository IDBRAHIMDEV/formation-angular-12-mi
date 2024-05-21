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
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
