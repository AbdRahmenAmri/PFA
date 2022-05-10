from django.contrib import admin
from s2n.post.models import Article, Category, Interest

# Register your models here.
admin.site.register(Article)
admin.site.register(Category)
admin.site.register(Interest)