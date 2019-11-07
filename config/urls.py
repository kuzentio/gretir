from django.conf import settings
from django.conf.urls import url
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path

from apps.product import views

urlpatterns = [
    path('admin/', admin.site.urls),
    url(
        regex=r'^$',
        view=views.HomeView.as_view(),
        name='home'
    ),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
