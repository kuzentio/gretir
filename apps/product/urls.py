from django.conf.urls import url
from django.contrib.auth.decorators import login_required

from apps.product import views

app_name = 'product'

urlpatterns = [
    # url(
    #     regex=r'^.*',
    #     view=views.HomeView.as_view(),
    #     name='home'
    # ),
]
