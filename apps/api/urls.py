from rest_framework.routers import SimpleRouter

from apps.product.views import ProductViewSet

router = SimpleRouter(trailing_slash=False)
router.register(r'product', ProductViewSet)

urlpatterns = [
]
