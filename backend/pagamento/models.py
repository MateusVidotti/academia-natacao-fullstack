from django.db import models
from fornecedor.models import Fornecedor


PAGAMENTO_STATUS = [
    ('pendente', 'Pendente'),
    ('pago', 'Pago'),
    ('cancelado', 'Cancelado'),
]

PAGAMENTO_CLASSE = [
    ('pessoal', 'Pessoal'),
    ('encargos', 'Encargos'),
    ('administracao', 'Administração'),
]

PAGAMENTO_TIPO =[
    ('folha_liquida', 'Folha Líquida'),
    ('recisoes', 'Recisões'),
    ('fgts', 'FGTS'),
    ('inss', 'INSS'),
    ('material_limpeza','Material de Limpeza/Conservação'),
    ('energia_eletrica', 'Energia Elétrica'),
    ('agua', 'Água'),
    ('telefone_internet', 'Telefone/Internet'),
    ('taxas', 'IPTU/ISS/Taxas Diversas'),
    ('aluguel','Aluguel'),
    ('seguros', 'Seguros'),
    ('terceiros', 'Serviços de Terceiros')
]


class Pagamento(models.Model):
    id = models.AutoField(primary_key=True)
    fornecedor = models.ForeignKey(Fornecedor, on_delete=models.CASCADE)
    descricao = models.CharField(max_length=255, verbose_name='Descrição')
    classe = models.CharField(max_length=50, default='Administração')
    tipo = models.CharField(max_length=50, default='Material de Limpeza/Conservação')
    valor = models.DecimalField(max_digits=10, decimal_places=2, verbose_name='Valor')
    data_emissao = models.DateField(auto_now_add=True, verbose_name='Data de Emissão')
    data_vencimento = models.DateField(verbose_name='Data de Vencimento')
    status = models.CharField(max_length=30, choices=PAGAMENTO_STATUS, default='pendente')

    def __str__(self):
        return self.fornecedor.nome