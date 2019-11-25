from django.conf.urls import url
from django.urls import include
from rest_framework.routers import SimpleRouter

product_router = SimpleRouter(trailing_slash=False)

urlpatterns = [
    url(r"^product/$", include(product_router.urls)),
]
