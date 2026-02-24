import { Component, Input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItemComponent {
  @Input() product!: Product;
  delete = output<number>();

  currentImageIndex = 0;
  heartAnimations: number[] = [];   // массив для нескольких анимаций

  get currentImage(): string {
    return this.product.images[this.currentImageIndex];
  }

  prevImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.product.images.length) % this.product.images.length;
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.product.images.length;
  }

  setImage(index: number) {
    this.currentImageIndex = index;
  }

  like() {
    this.product.likes++;
    
    // Каждый клик создаёт новую анимацию
    const animationId = Date.now();
    this.heartAnimations.push(animationId);

    // Удаляем анимацию через 700 мс
    setTimeout(() => {
      this.heartAnimations = this.heartAnimations.filter(id => id !== animationId);
    }, 700);
  }

  confirmDelete() {
    if (confirm('Вы уверены, что хотите удалить этот товар?')) {
      this.delete.emit(this.product.id);
    }
  }

  shareToWhatsApp() {
    const text = `Смотри какой товар: ${this.product.name}\n${this.product.link}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  }

  shareToTelegram() {
    const text = this.product.name;
    const url = this.product.link;
    window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
  }

  get stars() {
    const full = Math.floor(this.product.rating);
    const hasHalf = this.product.rating % 1 >= 0.5;
    return Array(5).fill(0).map((_, i) => {
      if (i < full) return 'full';
      if (i === full && hasHalf) return 'half';
      return 'empty';
    });
  }
}