# Generated by Django 3.1.10 on 2024-01-01 05:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('socialapp', '0010_auto_20240101_1117'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='like',
            name='name',
        ),
    ]
