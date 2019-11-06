from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=255)
    thumb = models.ImageField()


class Price(models.Model):
    value = models.DecimalField(max_digits=5, decimal_places=2)
    created_at = models.DateTimeField(auto_now=True)


class Ticket(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    price = models.ForeignKey(Price, on_delete=models.CASCADE)
