from django.db import models
from django.utils.translation import gettext_lazy as _

# Create your models here.


class Interest(models.Model):
    keyword = models.CharField(max_length=50)

    # user_hashtag = models.ManyToManyField(MyUser)

    def __str__(self):
        return self.keyword


def article_directory_path(instance, filename):
    return 'users/{filename}'.format(filename=filename)


class Article(models.Model):
    article_title = models.CharField(max_length=70)
    article_desc = models.CharField(max_length=500)
    article_hashtag = models.ManyToManyField(Interest)
    user = models.ForeignKey("users.MyUser", on_delete=models.CASCADE, related_name="userArticle", null=True)
    article_pic = models.ImageField(_("Image"), upload_to=article_directory_path, default='article/article.png', null=True )
    posted_at = models.DateTimeField(auto_now_add=True)
    views = models.IntegerField(default=0)
    upVotes = models.IntegerField(default=0)
    downVotes = models.IntegerField(default=0)
    article_text = models.CharField(max_length=500000)

    def __str__(self):
        return self.article_title
