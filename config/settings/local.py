from .base import *  # noqa

AUTH_PASSWORD_VALIDATORS = []

CORS_ORIGIN_ALLOW_ALL = True
# CORS_ORIGIN_WHITELIST = [
#     'http://localhost:4200'
# ]

INSTALLED_APPS += (
    'django_extensions',
)
