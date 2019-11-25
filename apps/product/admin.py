from django.contrib import admin

from apps.product.models import Product, Price, Ticket


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    fields = ('name', 'thumb', 'slug')
    readonly_fields = ('slug', )
    list_display = ('name', )


@admin.register(Price)
class PriceAdmin(admin.ModelAdmin):
    list_display = ('value', 'created_at')


@admin.register(Ticket)
class TicketAdmin(admin.ModelAdmin):
    list_display = ('product', 'price')
