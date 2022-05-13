from rest_framework import serializers

from api.post.serializers import InterestSerializer
from users.models import *


def required(value):
    if value is None:
        raise serializers.ValidationError('This field is required')


class UserSerializer(serializers.ModelSerializer):
    username = serializers.CharField(validators=[required])
    first_name = serializers.CharField(validators=[required])
    last_name = serializers.CharField(validators=[required])
    email = serializers.EmailField(validators=[required])

    class Meta:
        model = MyUser
        fields = ['username', 'first_name', 'last_name', 'email', 'password', ]
        extra_kwargs = {
            'password': {'write_only': True},

        }

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


# class RegisterSerializer(serializers.ModelSerializer):
#     profile = ProfileSerializer(required=False)
#
#     class Meta:
#         model = MyUser
#         fields = ['email', 'first_name', 'last_name', 'username', 'password', 'profile']
#         extras_kwargs = {
#             'password': {'write_only': True}
#         }

# User profile configuration serializer
class UserProfileConfigSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyUser
        fields = ["username", "first_name", "last_name", "image", "description", "password"]
        # extra_kwargs = {
        #     'username': {'required': False}, 'first_name': {'required': False}, 'last_name': {'required': False},
        #     'image': {'required': False},
        # }

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


class UserPostInterestSerialiazer(serializers.ModelSerializer):
    interests = InterestSerializer(many=True, read_only=True)

    class Meta:
        model = MyUser
        fields = ["interests"]
