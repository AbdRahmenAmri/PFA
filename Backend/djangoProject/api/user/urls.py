from django.conf.urls.static import static
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from django.conf import settings
from .views import registration_view

urlpatterns = [
    path('register/', registration_view, name='register'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

]
SIMPLE_JWT = {
    'ROTATE_REFRESH_TOKENS': True
}
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)