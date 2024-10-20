from fornecedor.models import Fornecedor
from fornecedor.serializers import FornecedorSerializer
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated


class FornecedorView(viewsets.ModelViewSet):
    """View Fornecedor"""
    queryset = Fornecedor.objects.all()
    serializer_class = FornecedorSerializer
    permission_classes = [IsAuthenticated]