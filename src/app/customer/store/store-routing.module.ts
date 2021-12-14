import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'ProductList', pathMatch: 'full' }, 
  { path: 'ProductList', loadChildren: () => import('./product-list/product-list.module').then(m => m.ProductListModule) }, 
  { path: 'Product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
