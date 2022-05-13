from rest_framework import viewsets, mixins, status
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.permissions import *
from rest_framework.response import Response

from post.models import Interest
from users.models import MyUser
from .permissions import IsAuthorOrReadOnly
from .serializers import *
from rest_framework.generics import *


class ArticlePost(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticlePostSerializer
    permission_classes = [IsAuthenticated]

    # permission_classes = [IsAuthenticated]
    # permission_classes = [IsAuthenticated]
    # def update(self, request, *args, **kwargs):
    def create(self, request, *args, **kwargs):
        serializer = ArticlePostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
