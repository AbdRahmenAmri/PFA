from django.conf.urls.static import static
from django.urls import path, include
from rest_framework import routers
# from api.post.views import IntersetViewSet
# from api.post.views import UserInterestPostAndGet
from api.user.views import UserViewSet
from api.post.views import ArticlePost
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from django.conf import settings
from api.user.views import Register


router = routers.SimpleRouter()
router.register(r'users', UserViewSet)
router.register(r'article', ArticlePost)
# router.register(r'interests', IntersetViewSet)
urlpatterns = [
    path('register/', Register.as_view(), name='register'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # path('user/<str:pk>/add-interest',UserInterestPostAndGet.as_view(), name="add-post")
    # path('user/<str:pk>/configure',UserInfoePost.as_view(),name="configure-profile")
]
urlpatterns += router.urls
SIMPLE_JWT = {
    'ROTATE_REFRESH_TOKENS': True
}
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)