import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { INewProduct } from '../../interfaces/product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css',
})
export class EditProductComponent {
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  productId = this.route.snapshot.params['id'];

  editForm = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    description: new FormControl(''),
  });

  router = new Router();

  ngOnInit() {
    this.productService.getProductById(this.productId).subscribe(
      (data) => {
        this.editForm.reset(data as any);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onUpdate() {
    this.productService
      .updateProduct(this.productId, this.editForm.value as INewProduct)
      .subscribe(() => {
        alert('Cập nhật sản phẩm thành công!');

        this.router.navigate(['/admin/products']);
      });
  }
}
