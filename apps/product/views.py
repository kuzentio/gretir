from django.views.generic import TemplateView
from rest_framework.permissions import AllowAny
from rest_framework.viewsets import ModelViewSet

from apps.product.models import Product
from apps.product.serializers import ProductSerializer


class HomeView(TemplateView):
    template_name = 'product/index.html'


class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = (AllowAny, )
