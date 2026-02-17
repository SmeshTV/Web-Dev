import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Фотокамера Kodak FZ55',
      description: 'Компактная цифровая камера с 16 МП сенсором и 5-кратным оптическим зумом. Идеально для путешествий и семейных фото. Лёгкая, стильная и простая в использовании.',
      price: 59990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pd0/p4d/27709865.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pd0/p4d/27709865.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pcf/p22/27709985.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/peb/p22/27709986.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/kodak-fz55-135590783/'
    },
    {
      id: 2,
      name: 'Игра FC 26 для PS5',
      description: 'Новейшая часть легендарной футбольной серии. Реалистичная графика, обновлённые составы команд и улучшенный геймплей. Для настоящих фанатов футбола.',
      price: 29990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pf3/p7a/55359573.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pf3/p7a/55359573.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0f/p7b/55359574.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/fc-26-ps5-143170903/'
    },
    {
      id: 3,
      name: 'Пылесос Ritello R2 черный',
      description: 'Мощный пылесос с аквафильтром 1000 Вт. Отлично справляется с пылью, шерстью и волосами. Тихая работа и удобное управление.',
      price: 44990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1a/h0a/85888976977950.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h1a/h0a/85888976977950.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/pf5/pe8/35015617.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h37/hcc/85888977043486.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/ritello-r2-chernyi-118913127/'
    },
    {
      id: 4,
      name: 'Мобильный телефон Nokia 6300 серебристый',
      description: 'Классика в современном исполнении. Долгая автономность, качественная сборка и ностальгический дизайн. Отличный вариант для звонков и простых задач.',
      price: 19990,
      rating: 4.3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h04/hc9/64364667568158.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h04/hc9/64364667568158.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h53/h38/64364736479262.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h02/h85/64364738740254.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/nokia-6300-serebristyi-101866256/'
    },
    {
      id: 5,
      name: 'Наушники P9 серебристый',
      description: 'Беспроводные наушники с отличным звуком и удобной посадкой. Долгое время работы и стильный дизайн.',
      price: 2990,
      rating: 4.2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h07/h7a/84985846595614.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h07/h7a/84985846595614.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h1f/hb2/84985846661150.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/naushniki-p9-serebristyi-116112464/'
    },
    {
      id: 6,
      name: 'Система нагревания IQOS ILUMA розовый',
      description: 'Современная система нагревания табака без дыма и пепла. Комфорт и современный дизайн в розовом цвете.',
      price: 79990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf9/hcc/84248955093022.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hf9/hcc/84248955093022.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/hdd/h53/84248955191326.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/hb2/h38/84248955256862.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/iqos-iluma-rozovyi-113970876/'
    },
    {
      id: 7,
      name: 'Сабвуфер Element-5 1205',
      description: 'Мощный сабвуфер для глубокого и насыщенного баса. Идеально дополнит вашу аудиосистему.',
      price: 34990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h44/h56/63817880928286.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h44/h56/63817880928286.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h9f/hec/85704765866014.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/sabvufer-element-5-1205-5801656/'
    },
    {
      id: 8,
      name: 'Копилка 1 Миллион тенге, дерево',
      description: 'Стильная деревянная копилка в форме миллиона тенге. Отличный подарок и мотивация к накоплениям.',
      price: 4990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p96/pd9/7429318.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p96/pd9/7429318.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p79/pd9/7429319.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p0d/pd7/7429320.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/1-million-tenge-derevo-107479691/'
    },
    {
      id: 9,
      name: 'Смартфон Samsung Galaxy A35 5G 8/128 ГБ голубой',
      description: 'Стильный смартфон с отличной камерой, большим экраном и долгой автономностью. Поддержка 5G.',
      price: 149990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha2/hdf/85428859502622.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/ha2/hdf/85428859502622.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h08/hec/85428859568158.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h96/h95/85428859633694.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a35-5g-8-gb-128-gb-goluboi-117420525/'
    },
    {
      id: 10,
      name: 'Смартфон Samsung Galaxy S25 Ultra 5G 12/512 ГБ черный',
      description: 'Флагманский смартфон 2026 года. Лучшая камера, мощный процессор и премиум-дизайн.',
      price: 549990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/pbc/p24/20120108.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p7d/p27/20120112.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-512-gb-chernyi-133435341/'
    }
  ];
}