from rest_framework import serializers
from users.models import *


def required(value):
    if value is None:
        raise serializers.ValidationError('This field is required')


class UserSerializer(serializers.ModelSerializer):
    first_name = serializers.CharField(validators=[required])
    last_name = serializers.CharField(validators=[required])
    email = serializers.EmailField(validators=[required])
    class Meta:
        model = MyUser
        fields = ['username', 'first_name', 'last_name', 'email', 'password', 'description',
                  'second_email', 'bio']
        extra_kwargs = {
            'password': {'write_only': True}
        }

        def validate(self, data):
            if data['first_name'].length() == 0:
                raise serializers.ValidationError("The first name required")
            if data['last_name'].length() == 0:
                raise serializers.ValidationError("The last name is required")
            return data

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
