from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField(default=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')
    rating = models.FloatField(default=0.0)
    image = models.CharField(max_length=500, blank=True)
    images = models.JSONField(default=list)
    link = models.CharField(max_length=500, blank=True)
    likes = models.IntegerField(default=0)

    def __str__(self):
        return self.name