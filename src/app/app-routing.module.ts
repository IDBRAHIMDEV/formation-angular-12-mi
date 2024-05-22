import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ListProductsComponent } from './pages/products/list-products/list-products.component';
import { ViewProductComponent } from './pages/products/view-product/view-product.component';
import { EditProductComponent } from './pages/products/edit-product/edit-product.component';
import { AddProductComponent } from './pages/products/add-product/add-product.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'learning',
    component: CoursesComponent
  },
  {
    path: 'store',
    component: ListProductsComponent
  },
  {
    path: 'store/:id',
    component: ViewProductComponent
  },
  {
    path: 'store/edit/:id',
    component: EditProductComponent
  }, 
  {
    path: 'store/add',
    component: AddProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
