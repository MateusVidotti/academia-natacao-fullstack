from aluno.models import Aluno
from aluno.serializers import AlunoSerializer
from rest_framework import viewsets


class AlunoView(viewsets.ModelViewSet):
    """View Aluno"""
    queryset = Aluno.objects.all()
    serializer_class = AlunoSerializer