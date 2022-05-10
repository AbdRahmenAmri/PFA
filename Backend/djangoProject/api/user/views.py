from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import generics, viewsets
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.generics import *
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated
from users.models import MyUser

"""
ViewSet ==> A ViewSet class is simply a type of class-based View, 
that does not provide any method handlers such as .get() or 
.post(), and instead provides actions such as .list() and .create()."""

"""Routes ==> There are two mandatory arguments to the register() method:
prefix - The URL prefix to use for this set of routes.
viewset - The viewset class.
The example above would generate the following URL patterns:
URL pattern: ^users/$ Name: 'user-list'
URL pattern: ^users/{pk}/$ Name: 'user-detail'
URL pattern: ^accounts/$ Name: 'account-list'
URL pattern: ^accounts/{pk}/$ Name: 'account-detail'
"""

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


class UserViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = UserSerializer
    queryset = MyUser.objects.get()







