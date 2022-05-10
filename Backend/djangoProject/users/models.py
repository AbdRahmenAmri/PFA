import uuid

from django.contrib.auth.models import AbstractUser, User
from django.db import models
import uuid
from django.utils.translation import gettext_lazy as _


# Create your models here.

def user_directory_path(instance, filename):
    return 'images/{0}/'.format(filename)


class MyUser(AbstractUser):
    id = models.UUIDField(default=uuid.uuid4,
                          primary_key=True,
                          unique=True,
                          editable=False)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    date_of_birth = models.DateTimeField(auto_now=True, null=True, blank=True)
    description = models.CharField(max_length=500, blank=True, null=True)
    second_email = models.EmailField(max_length=300, blank=True, null=True)
    # profile_img = models.ImageField(null=True, blank=True)
    profession = models.CharField(max_length=70, blank=True, null=True)
    social_github = models.URLField(blank=True, null=True)
    social_facebook = models.URLField(blank=True, null=True)
    social_instagram = models.URLField(blank=True, null=True)
    social_twitter = models.URLField(blank=True, null=True)


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class UserImage(models.Model):
    options = {
        ('active', 'Active'),
        ('deactivated', 'Deactivated')
    }
    image = models.ImageField(upload_to=user_directory_path, default='')
    category = models.ForeignKey(Category, on_delete=models.PROTECT, )
    title = models.CharField

# TODO: add image model