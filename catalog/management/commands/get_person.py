import os
from concurrent.futures.thread import ThreadPoolExecutor

from django.core.management.base import BaseCommand
from openpyxl import load_workbook

from catalog.models import Person


def update():
    while True:
        get_data()


def get_data():
    wb = load_workbook('./Persons list.xlsx')
    sheet = wb.get_sheet_by_name('Sheet1')
    n_data = [i for i in sheet.values]
    n_data = n_data[1:]
    wb.close()
    for i in n_data:
        name = i[0]
        points = i[1]
        if i[2] is None:
            photo = 'None_photo.jpg'
        else:
            photo = i[2]
        facebook = i[3]

        person = {
            'name': name,
            'facebook': facebook,
        }
        try:
            p, created = Person.objects.update_or_create(**person, defaults={'points': points, 'photo': photo, })
            print(person)
        except Exception as e:
            print(type(e), e)
        continue


class Command(BaseCommand):
    help = 'Get data from excel file'

    def handle(self, *args, **options):
        with ThreadPoolExecutor(max_workers=10) as executor:
            executor.map(update(), )
