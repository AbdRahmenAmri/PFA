from rest_framework import serializers
from post.models import Article, Category, Interest
from users.models import MyUser

class CategorySerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Category
        fields = ['category']

class UserPostSerializer(serializers.ModelSerializer):
    category = CategorySerializer(many=True, read_only=True)
    class Meta:
        model = MyUser
        fields = ['username', 'category']

class ArticlePostSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Article
        exclude = ['upVotes', 'downVotes', 'views', 'posted_at']