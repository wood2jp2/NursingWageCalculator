from django.shortcuts import render

# Create your views here.
from django.http import HttpResponseRedirect
from django.contrib.auth.models import User
from rest_framework import permissions, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer, UserSerializerWithToken


#"Function-based" views
# This view will be used anytime the user revisits the site, reloads the page, or does anything else that causes React to forget its state.  React will check if the user has a token stored in the browser, and if a token is found, it’ll make a request to this view. the token will be parsed automatically to check for authentication, and if validated we’ll receive the user object associated with that token in the request’s user property. We can then serialize the user object, and return the data from the serializer in the response.
@api_view(['GET'])
def current_user(request):
    """
    Determine the current user by their token, and return their data
    """
    
    serializer = UserSerializer(request.user)
    return Response(serializer.data)

# When a request is routed to this view, a UserSerializerWithToken serializer object is instantiated with the data the user entered into the signup form. The serializer checks whether or not the data is valid, and if it is, it’ll save the new user and return that user’s data in the response (including the token, since we’re using this particular serializer).
class UserList(APIView):
    """
    Create a new user. It's called 'UserList' because normally we'd have a get
    method here too, for retrieving a list of all User objects.
    """

    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)