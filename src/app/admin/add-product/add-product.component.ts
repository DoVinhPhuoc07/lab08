import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { INewProduct } from '../../interfaces/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  constructor(private productService: ProductService) {}

  addForm = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    description: new FormControl(''),
  });

  onAdd() {
    this.productService
      .addProduct(this.addForm.value as INewProduct)
      .subscribe(() => {
        alert('Thêm sản phẩm thành công!');

        this.addForm.reset();
      });
  }
}
