import uuid

from django.db import models
from django.utils.text import slugify
from autoslug import AutoSlugField


def product_directory_path(instance, filename):
    return 'product_{0}/{1}'.format(uuid.uuid4(), filename)


class Product(models.Model):
    name = models.CharField(max_length=255)
    slug = AutoSlugField(populate_from='name', unique=True)
    thumb = models.ImageField(blank=True, upload_to=product_directory_path)

    def __str__(self):
        return self.name

    def save(self, force_insert=False, force_update=False, using=None,
             update_fields=None, *args, **kwargs):
        self.slug = slugify(self.name, allow_unicode=True)
        super(Product, self).save(*args, **kwargs)


class Price(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    value = models.DecimalField(max_digits=5, decimal_places=2)
    created_at = models.DateTimeField(auto_now=True)


class Ticket(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    price = models.ForeignKey(Price, on_delete=models.CASCADE)
