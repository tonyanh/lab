import { FormBuilder } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from './../../interfaces/product';

import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  product!: IProduct;
  productForm = this.formBuilder.group({
    name: [''],
    price: 0
  })
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.route.paramMap.subscribe(param => {
      const id = param.get('id');
      this.productService.getProduct(id).subscribe(product => {
        this.product = product
        this.productForm.patchValue({
          name: product.name,
          price: product.price
        })
      })
    })
  }
  onHandleEdit() {
    if(this.productForm.value) {
      const product: IProduct= {
        id: this.product.id,
        name: this.productForm.value.name || "",
        price: this.productForm.value.price || 0
      }
      this.productService.editProduct(product).subscribe(data => {
        console.log(data)
        alert('Cap nhat thanh cong')
      })
    }
  }
}
