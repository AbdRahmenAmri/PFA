from rest_framework import serializers
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
        fields = ['username', 'first_name', 'last_name', 'email', 'password']
        extra_kwargs = {
            'password': {'write_only': True}
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
    password = serializers.CharField(validators=[not required])
    class Meta:
        model = MyUser
        fields = ["username", "first_name", "last_name", "date_of_birth", "description"]
<<<<<<< HEAD




=======
>>>>>>> a709d7bab941b2a732dafc2e8ac099d23b26d038
