import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductlistComponent } from './productlist/productlist.component';

const routes: Routes = [
  { path: '', component: ProductlistComponent },
  { path: 'create-product', component: CreateproductComponent },
  { path: 'edit-product/:id', component: EditProductComponent },
  { path: ':id', component: ProductdetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
