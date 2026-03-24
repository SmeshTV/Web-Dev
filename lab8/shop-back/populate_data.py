import os
import django
import sys

sys.path.append(os.path.dirname(__file__))
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'shop_back.settings')
django.setup()

from api.models import Category, Product

categories_data = [
    {'id': 1, 'name': 'Смартфоны'},
    {'id': 2, 'name': 'Наушники и аудио'},
    {'id': 3, 'name': 'Бытовая техника'},
    {'id': 4, 'name': 'Фото и видео'}
]

products_data = [
    {'id': 1, 'categoryId': 1, 'name': 'Смартфон Samsung Galaxy A36 5G 8 ГБ/256 ГБ черный', 'description': 'Стильный смартфон среднего сегмента 2025 года с отличной камерой, AMOLED-экраном 120 Гц и защитой IP67.', 'price': 199990},
    {'id': 2, 'categoryId': 1, 'name': 'Смартфон Apple iPhone 16 128Gb черный', 'description': 'Новый флагман Apple 2025 года с мощным процессором и улучшенной камерой.', 'price': 449990},
    {'id': 3, 'categoryId': 1, 'name': 'Смартфон Poco X7 Pro 12 ГБ/512 ГБ черный', 'description': 'Мощный смартфон с камерой Leica и быстрой зарядкой 120 Вт.', 'price': 349990},
    {'id': 4, 'categoryId': 1, 'name': 'Смартфон Google Pixel 10 12 ГБ/256 ГБ черный', 'description': 'Чистый Android, отличная камера и ИИ-функции.', 'price': 399990},
    {'id': 5, 'categoryId': 1, 'name': 'Смартфон HONOR Magic7 Pro 12 ГБ/512 ГБ черный', 'description': 'Складной дизайн, мощная батарея и камера 180 МП.', 'price': 429990},
    {'id': 6, 'categoryId': 2, 'name': 'Наушники Apple AirPods Max 2 черно-синий', 'description': 'Беспроводные наушники с активным шумоподавлением, пространственным аудио, адаптивным эквалайзером и до 30 часов работы с кейсом. Идеальны для экосистемы Apple.', 'price': 119990},
    {'id': 7, 'categoryId': 2, 'name': 'Наушники Sony WH-1000XM5 черный', 'description': 'WH-1000XM5 поддерживают форматы High-Resolution Audio и High-Resolution Audio Wireless благодаря LDAC – признанной технологии кодирования звука. LDAC передает в три раза больше данных, чем Bluetooth®, обеспечивая исключительное качество звука высокого разрешения.', 'price': 134999},
    {'id': 8, 'categoryId': 2, 'name': 'Наушники JBL Tune 770NC черный', 'description': 'Беспроводные наушники с активным шумоподавлением, мощным басом JBL Pure Bass и до 70 часов автономности. Идеальны для музыки и повседневного использования.', 'price': 33998},
    {'id': 9, 'categoryId': 2, 'name': 'Наушники Soundcore Life Q30 синий', 'description': 'Бюджетные беспроводные наушники с активным шумоподавлением, мощным басом и до 40 часов работы от аккумулятора. Отличный выбор для ежедневного прослушивания.', 'price': 55000},
    {'id': 10, 'categoryId': 2, 'name': 'Наушники Bose QuietComfort Ultra Earbuds черный', 'description': 'Беспроводные наушники Bose QuietComfort Ultra Earbuds — это эталон чистого звука и комфорта в компактном исполнении. Наслаждайтесь глубокими басами и кристально чистыми высокими частотами где бы вы ни находились.', 'price': 105999},
    {'id': 11, 'categoryId': 3, 'name': 'Пылесос Dyson V15 Detect Absolute SV47 серебристый', 'description': 'Мощный беспроводной пылесос Dyson V15 Detect Absolute с лазерным датчиком пыли и автоматической регулировкой мощности. До 60 минут работы без подзарядки.', 'price': 323736},
    {'id': 12, 'categoryId': 3, 'name': 'Холодильник Samsung RB38C776DB1/WT черный', 'description': 'Современный холодильник Samsung RB38C776DB1/WT с инверторным компрессором, зоной свежести и системой Twin Cooling Plus для максимальной сохранности продуктов.', 'price': 499980},
    {'id': 13, 'categoryId': 3, 'name': 'Стиральная машина LG F4V5VS0W белый', 'description': 'Интеллектуальная стиральная машина LG F4V5VS0W с прямым приводом, паровой обработкой и базой из 20 000 сочетаний тканей для идеальной стирки.', 'price': 293669},
    {'id': 14, 'categoryId': 3, 'name': 'Haier HSU-09HTM303/R3-IN+HSU-09HTM303/R3-OUT белый + монтажный комплект', 'description': 'Инверторный кондиционер Haier HSU-09HTM303/R3 мощностью 9000 BTU с функцией самоочистки и эффективным охлаждением помещений до 27 м².', 'price': 129990},
    {'id': 15, 'categoryId': 3, 'name': 'Микроволновая печь LG MS2595DIS черный', 'description': 'Микроволновая печь LG MS2595DIS NeoChef с технологией Smart Inverter 1000 Вт для равномерного размораживания и приготовления блюд.', 'price': 99990},
    {'id': 16, 'categoryId': 4, 'name': 'Фотокамера Canon EOS R50 RF-S 18-45 + Kit 55-210 mm', 'description': 'Компактная беззеркальная камера Canon EOS R50 с двумя объективами для начинающих и любителей, поддержка 4K видео и отличный автофокус.', 'price': 587160},
    {'id': 17, 'categoryId': 4, 'name': 'Фотокамера Sony ZV-E10 II Kit 16-50 mm', 'description': 'Sony ZV-E10 II — камера для видеоблогеров с 26 МП сенсором APS-C, улучшенным автофокусом и функциями для создания контента.', 'price': 566393},
    {'id': 18, 'categoryId': 4, 'name': 'Экшн-камера GoPro HERO 12 Black Edition', 'description': 'Экшн-камера GoPro HERO 12 Black с записью 5.3K видео, HyperSmooth 6.0 стабилизацией и улучшенной ночной съёмкой.', 'price': 191076},
    {'id': 19, 'categoryId': 4, 'name': 'Дрон DJI Mini 4 Pro Fly More Combo Plus (DJI RC 2) белый', 'description': 'Компактный дрон DJI Mini 4 Pro с 48 МП камерой, 4K видео, временем полёта до 34 минут и функцией Large-Angle Tilt для съёмки снизу-вверх.', 'price': 568181},
    {'id': 20, 'categoryId': 4, 'name': 'Экшн-камера Insta360 X4 Standard Bundle', 'description': '360-градусная экшн-камера Insta360 X4 Standard Bundle с записью 8K видео, невидимой селфи-палкой и отличной стабилизацией.', 'price': 199488}
]

# Clear existing data
Product.objects.all().delete()
Category.objects.all().delete()

# Create categories
categories = {}
for cat_data in categories_data:
    cat = Category(id=cat_data['id'], name=cat_data['name'])
    cat.save()
    categories[cat_data['id']] = cat

# Create products
for prod_data in products_data:
    prod = Product(
        id=prod_data['id'],
        name=prod_data['name'],
        description=prod_data['description'],
        price=prod_data['price'],
        count=10,  # Default count
        is_active=True,
        category=categories[prod_data['categoryId']]
    )
    prod.save()

print("Data populated successfully!")