from django.db import models
from users.models import MyUser

# Create your models here.

class Category(models.Model):
    category = models.CharField(max_length=50)

    def __str__(self):
        return self.category

class Interest(models.Model):
    keyword = models.CharField(max_length=50)
    user_hashtag = models.ManyToManyField(MyUser)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.keyword

class Article(models.Model):
    article_title = models.CharField(max_length=70)
    article_desc = models.CharField(max_length=500)
    article_hashtag = models.ManyToManyField(Interest)
    user = models.ForeignKey(MyUser, on_delete=models.CASCADE, related_name="userArticle")
    # article_pic = models.ImageField(upload_to='photos/%y/%m/%d')
    posted_at = models.DateTimeField(auto_now_add=True)
    views = models.IntegerField()
    upVotes = models.IntegerField()
    downVotes =models.IntegerField()
    
    def __str__(self):
        return self.title
    
    
    