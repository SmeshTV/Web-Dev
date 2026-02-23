import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list';
import { categories } from './data/products';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  categories = categories;
  selectedCategoryId: number | null = null;

  selectCategory(id: number | null) {
    this.selectedCategoryId = id;
  }
}