from recebimento.views import RecebimentoView, RelatorioFaturamentoAPIView
from django.urls import path, include
from rest_framework import routers

router = routers.DefaultRouter()
router.register('recebimentos', RecebimentoView)

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/relatorio-faturamento/', RelatorioFaturamentoAPIView.as_view(), name='relatorio-faturamento'),
]