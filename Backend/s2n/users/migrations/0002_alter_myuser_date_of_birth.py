# Generated by Django 4.0.4 on 2022-04-25 01:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='myuser',
            name='date_of_birth',
            field=models.DateTimeField(auto_now=True, null=True),
        ),
    ]
