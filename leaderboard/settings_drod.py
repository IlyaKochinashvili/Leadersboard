DEBUG = False
ALLOWED_HOSTS = ['*']


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'db1',
        'USER': 'loyacc',
        'PASSWORD': '221291',
        'HOST': 'localhost',
        'PORT': '',
    }
}