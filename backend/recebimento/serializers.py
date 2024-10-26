from rest_framework import serializers
from recebimento.models import Recebimento


class RecebimentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recebimento
        fields = ['id', 'aluno', 'descricao', 'valor', 'data_emissao', 'data_vencimento', 'status']
        extra_kwargs = {
            'id': {'required': False},
            'fornecedor': {'required': True},
            'descricao': {'required': True},
            'valor': {'required': True},
            'data_emissao': {'required': True},
            'data_vencimento': {'required': True},
            'status': {'required': True},
        }

    def to_internal_value(self, data):
        # Inclui o ID na validação
        ret = super().to_internal_value(data)
        ret['id'] = data.get('id', None)  # Captura o ID se estiver presente
        return ret
