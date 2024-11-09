from datetime import datetime
from pagamento.models import Pagamento
from pagamento.serializers import PagamentoSerializer
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated


class PagamentoView(viewsets.ModelViewSet):
    """View Fornecedor"""
    queryset = Pagamento.objects.all()
    serializer_class = PagamentoSerializer
    permission_classes = [IsAuthenticated]


class RelatorioPagamentoAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        pagamentos = Pagamento.objects.filter(status='pago')
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
                pagamento.valor for pagamento in pagamentos
                if pagamento.data_vencimento.month == mes_atual and pagamento.data_vencimento.year == ano_atual
            )
            labels.append(meses[mes_atual - 1])
            data.append(total_mes)

        data_json = {'data': data[::-1], 'labels': labels[::-1]}
        return Response(data_json)

