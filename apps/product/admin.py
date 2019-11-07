from django.contrib import admin

from apps.product.models import Product, Price, Ticket


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', ]


@admin.register(Price)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['value', 'created_at']


@admin.register(Ticket)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['product', 'price']
