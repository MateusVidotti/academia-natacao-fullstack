from fornecedor.views import FornecedorView
from django.urls import path, include
from rest_framework import routers

router = routers.DefaultRouter()
router.register('fornecedores', FornecedorView)

print(router.urls)
urlpatterns = [
    path('api/', include(router.urls))
]