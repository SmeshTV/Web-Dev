import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item';
import { Product } from '../../models/product.model';
import { products } from '../../data/products';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent {
  @Input() categoryId: number | null = null;

  get categoryProducts(): Product[] {
    if (this.categoryId === null) {
      return products;
    }
    return products.filter(p => p.categoryId === this.categoryId);
  }

  onDelete(productId: number) {
    const index = products.findIndex(p => p.id === productId);
    if (index !== -1) products.splice(index, 1);
  }
}