from django.core.management.base import BaseCommand

from openpyxl import load_workbook
from catalog.models import Person


def get_data():
    person = {}
    wb = load_workbook('./Persons list.xlsx')
    sheet = wb.get_sheet_by_name('Sheet1')
    data = sheet.values
    n_data = []
    for i in data:
        n_data.append(i)
    n_data = n_data[1:]

    for i in n_data:
        name = i[0]
        points = i[1]
        if i[2] == None:
            photo = 'None_photo.jpg'
        else:
            photo = i[2]
        facebook = i[3]
        person = {
            'name': name,
            'points': points,
            'photo': photo,
            'facebook': facebook,
        }
        try:
            Person.objects.create(**person)
            print(person)
        except Exception as e:
            print(type(e), e)
            continue


class Command(BaseCommand):
    help = 'Get data from excel file'

    def handle(self, *args, **options):
        get_data()
