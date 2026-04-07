from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.ProductListAPIView.as_view(), name='products-list'),
    path('products/<int:product_id>/', views.ProductDetailAPIView.as_view(), name='product-detail'),
    path('categories/', views.CategoryListAPIView.as_view(), name='categories-list'),
    path('categories/<int:category_id>/', views.CategoryDetailAPIView.as_view(), name='category-detail'),
    path('categories/<int:category_id>/products/', views.CategoryProductsAPIView.as_view(), name='category-products'),
]
