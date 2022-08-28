import { NgModule } from '@angular/core';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductComponent } from './product/product.component';
import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { EditProductComponent } from './edit-product/edit-product.component';

@NgModule({
  declarations: [ProductlistComponent, ProductComponent, ProductdetailComponent, CreateproductComponent, EditProductComponent],
  imports: [SharedModule, ProductRoutingModule],
})
export class ProductModule {}
