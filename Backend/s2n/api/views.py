from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import generics
from rest_framework_simplejwt.tokens import RefreshToken

from .serializers import UserSerializer
from users.models import  MyUser


@api_view(['POST'])
def registration_view(request):
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)

    data = {}
    if serializer.is_valid():
        user = serializer.save()
        data['response'] = "Registration Successfull"
        data['username'] = user.username
        data['first_name'] = user.first_name
        data['last_name'] = user.last_name
        data['email'] = user.email
        refresh = RefreshToken.for_user(user)
        data['token'] = {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }
        return Response(data)
    else:
        return Response(serializer.errors)