import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './product-list.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    ProductListComponent,
    FilterBarComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    ProductListRoutingModule
  ]
})
export class ProductListModule { }
