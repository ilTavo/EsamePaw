# Generated by Django 4.0.4 on 2022-04-19 13:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Ordinazioni', '0011_ordinazione_carrello'),
    ]

    operations = [
        migrations.AddField(
            model_name='ordinazione',
            name='accettazione',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='ordinazione',
            name='consegnato',
            field=models.BooleanField(default=False),
        ),
    ]