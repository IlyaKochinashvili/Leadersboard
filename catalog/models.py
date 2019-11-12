from django.db import models


# Create your models here.


class Person(models.Model):
    name = models.CharField(max_length=255)
    points = models.IntegerField()
    photo = models.ImageField(upload_to="media", null=True)
    facebook = models.CharField(max_length=255, unique=True)

    objects = models.Manager()

    def __str__(self):
        return self.name
