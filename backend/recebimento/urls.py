from recebimento.views import RecebimentoView
from django.urls import path, include
from rest_framework import routers

router = routers.DefaultRouter()
router.register('recebimentos', RecebimentoView)

urlpatterns = [
    path('api/', include(router.urls))
]