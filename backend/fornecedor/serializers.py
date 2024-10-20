from rest_framework import serializers
from fornecedor.models import Fornecedor


class FornecedorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fornecedor
        fields = ['id', 'nome', 'telefone', 'documento', 'rua', 'numero', 'bairro', 'cidade', 'estado']
        extra_kwargs = {
            'id': {'required': False},
            'nome': {'required': True},
            'telefone': {'required': True},
            'documento': {'required': True},
            'rua': {'required': True},
            'numero': {'required': True},
            'cidade': {'required': True},
            'bairro': {'required': True},
            'estado': {'required': True}
        }

    def to_internal_value(self, data):
        # Inclui o ID na validação
        ret = super().to_internal_value(data)
        ret['id'] = data.get('id', None)  # Captura o ID se estiver presente
        return ret
