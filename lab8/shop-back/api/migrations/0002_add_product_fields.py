import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='image',
            field=models.CharField(blank=True, max_length=500),
        ),
        migrations.AddField(
            model_name='product',
            name='images',
            field=models.JSONField(default=list),
        ),
        migrations.AddField(
            model_name='product',
            name='likes',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='product',
            name='link',
            field=models.CharField(blank=True, max_length=500),
        ),
        migrations.AddField(
            model_name='product',
            name='rating',
            field=models.FloatField(default=0.0),
        ),
    ]