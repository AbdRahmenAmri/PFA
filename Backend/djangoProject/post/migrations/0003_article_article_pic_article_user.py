# Generated by Django 4.0.3 on 2022-05-12 01:34

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import post.models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('post', '0002_article_article_hashtag'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='article_pic',
            field=models.ImageField(default='article/blog.png', null=True, upload_to=post.models.article_directory_path, verbose_name='Image'),
        ),
        migrations.AddField(
            model_name='article',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='userArticle', to=settings.AUTH_USER_MODEL),
        ),
    ]
