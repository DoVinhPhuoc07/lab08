import { Component } from '@angular/core';
import { INewProduct } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css',
})
export class ListProductsComponent {
  products: INewProduct[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onDelete(id: string) {
    const isConfirm = confirm('Bạn có chắc chắn muốn xoá sản phẩm này?');

    if (isConfirm) {
      this.productService.deleteProduct(id).subscribe(() => {
        alert('Xoá sản phẩm thành công');

        this.fetchProducts();
      });
    }
  }
}
