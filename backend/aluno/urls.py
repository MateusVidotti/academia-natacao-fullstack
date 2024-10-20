from aluno.views import AlunoView
from django.urls import path, include
from rest_framework import routers

router = routers.DefaultRouter()
router.register('alunos', AlunoView)

print(router.urls)
urlpatterns = [
    path('api/', include(router.urls))
]