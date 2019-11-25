import factory
from django.core.files import File
from faker import Faker

from apps.product.models import Product


fake = Faker()


class ProductFactory(factory.DjangoModelFactory):
    class Meta:
        model = Product
        django_get_or_create = ('name', )

    name = fake.word()
    thumb = File({"title": "foo.bat"})
