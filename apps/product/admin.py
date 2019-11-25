from django.contrib import admin

from apps.product.models import Product, Price, Ticket


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', )

    # readonly_fields = ('slug',)
    prepopulated_fields = {"slug": ('name', )}

    def get_readonly_fields(self, request, obj=None):
        if obj:
            return ['slug']
        else:
            return []


@admin.register(Price)
class PriceAdmin(admin.ModelAdmin):
    list_display = ('value', 'created_at')


@admin.register(Ticket)
class TicketAdmin(admin.ModelAdmin):
    list_display = ('product', 'price')
