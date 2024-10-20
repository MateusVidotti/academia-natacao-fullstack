from pagamento.views import PagamentoView
from django.urls import path, include
from rest_framework import routers

router = routers.DefaultRouter()
router.register('pagamentos', PagamentoView)

urlpatterns = [
    path('api/', include(router.urls))
]