from django.conf import settings
from django.conf.urls import url
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

from apps.product import views

urlpatterns = [
    url(r"^$", views.HomeView.as_view(), name="home"),

    url(r'^api/', include('apps.api.urls')),

    path('admin/', admin.site.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
