from rest_framework.serializers import Serializer
from .models import Note
from rest_framework import viewsets, permissions
from .serializers import NoteSerializer

# Lead Viewset


class NoteViewSet(viewsets.ModelViewSet):
    queryset = Note.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = NoteSerializer
