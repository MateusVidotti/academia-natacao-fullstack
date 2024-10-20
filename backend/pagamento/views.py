from pagamento.models import Pagamento
from pagamento.serializers import PagamentoSerializer
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated


class PagamentoView(viewsets.ModelViewSet):
    """View Fornecedor"""
    queryset = Pagamento.objects.all()
    serializer_class = PagamentoSerializer
    permission_classes = [IsAuthenticated]
