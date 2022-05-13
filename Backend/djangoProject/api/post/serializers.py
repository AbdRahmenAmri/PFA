from rest_framework import serializers, request


from post.models import Article, Interest
from users.models import MyUser


class ArticlePostSerializer(serializers.ModelSerializer):

    #
    # def _user(self, obj):
    #     request = self.context.get('request', None)
    #     if request:
    #         return request.user

    class Meta:
        model = Article
        exclude = ["article_pic"]
        extra_kwargs = {
            "upVotes": {'read_only': True},
            "downVotes": {'read_only': True},
            'views': {'read_only': True},
            "posted_at": {'read_only': True},
            'user': {'read_only': True},
            # "article_pic":{'required': False}
        }



        # exclude = ['upVotes', 'downVotes', 'views', 'posted_at','article_hashtag']


class InterestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Interest
        fields = ["keyword"]

# class UserPostInterestSerializer(serializers.ModelSerializer):
#     interest = InterestSerializer(many=True, read_only=True)
#
#     class Meta:
#         model = MyUser
#         fields = ["interest"]
