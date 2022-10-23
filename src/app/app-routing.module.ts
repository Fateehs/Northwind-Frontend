import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ProductComponent }, // main page default
  { path: 'products', component: ProductComponent },
  { path: 'products/category/:categoryId', component: ProductComponent },
]; // root displayer

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
