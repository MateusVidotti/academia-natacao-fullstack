from recebimento.models import Recebimento
from recebimento.serializers import RecebimentoSerializer
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated


class RecebimentoView(viewsets.ModelViewSet):
    """View Fornecedor"""
    queryset = Recebimento.objects.all()
    serializer_class = RecebimentoSerializer
    permission_classes = [IsAuthenticated]
