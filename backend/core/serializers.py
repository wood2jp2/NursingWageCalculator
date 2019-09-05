from rest_framework import serializers
from rest_framework_jwt.settings import api_settings
from django.contrib.auth.models import User

# serializers.ModelSerializer gives us an easy way to customize serializers according to the model data they'll be working with.

# Note on the 'Meta' metaclass: When you create an object by calling the class, Python creates a new class (when it executes the 'class' statement) by calling the metaclass. Metaclasses therefore allow you to do 'extra things' when creating a class, like registering the new class with some registry or replace the class with something else entirely.
class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('username',)

class UserSerializerWithToken(serializers.ModelSerializer):

    token = serializers.SerializerMethodField()

    # Write-only ensures that the password cannot be passed back in a response.
    password = serializers.CharField(write_only=True)

    def get_token(self, obj):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(obj)
        token = jwt_encode_handler(payload)
        return token

    # We override the serializer’s create() method, which determines how the object being serialized gets saved to the database
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    class Meta:
        model = User
        fields = ('token', 'username', 'password')