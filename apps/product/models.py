from django.db import models


def product_directory_path(instance, filename):
    return 'product_{0}/{1}'.format(instance.id, filename)


class Product(models.Model):
    name = models.CharField(max_length=255)
    thumb = models.ImageField(blank=True, upload_to=product_directory_path)


class Price(models.Model):
    value = models.DecimalField(max_digits=5, decimal_places=2)
    created_at = models.DateTimeField(auto_now=True)


class Ticket(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    price = models.ForeignKey(Price, on_delete=models.CASCADE)
