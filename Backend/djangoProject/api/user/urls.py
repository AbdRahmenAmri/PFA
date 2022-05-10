from django.conf.urls.static import static
from django.urls import path, include
from rest_framework import routers

from .views import UserViewSet
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from django.conf import settings
from .views import registration_view

router = routers.SimpleRouter()
router.register(r'users', UserViewSet)
urlpatterns = [
    path('register/', registration_view, name='register'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

]
urlpatterns += router.urls
SIMPLE_JWT = {
    'ROTATE_REFRESH_TOKENS': True
}
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)