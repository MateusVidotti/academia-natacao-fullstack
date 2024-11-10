from datetime import datetime
from recebimento.models import Recebimento
from recebimento.serializers import RecebimentoSerializer
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated


class RecebimentoView(viewsets.ModelViewSet):
    """View Fornecedor"""
    queryset = Recebimento.objects.all().order_by('-data_vencimento')
    serializer_class = RecebimentoSerializer
    permission_classes = [IsAuthenticated]


class RelatorioFaturamentoAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        recebimentos = Recebimento.objects.filter(status='pago')
        meses = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']
        data = []
        labels = []
        mes_atual = datetime.now().month + 1
        ano_atual = datetime.now().year

        for _ in range(12):
            mes_atual -= 1
            if mes_atual == 0:
                mes_atual = 12
                ano_atual -= 1

            total_mes = sum(
                recebimento.valor for recebimento in recebimentos
                if recebimento.data_vencimento.month == mes_atual and recebimento.data_vencimento.year == ano_atual
            )
            labels.append(meses[mes_atual - 1])
            data.append(total_mes)

        data_json = {'data': data[::-1], 'labels': labels[::-1]}
        return Response(data_json)
