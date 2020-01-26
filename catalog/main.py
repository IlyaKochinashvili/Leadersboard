import gettext

_ = gettext.gettext

print(_('This is a translatable string.'))

# locale_path = 'datas/locale/'

ro = gettext.translation('messages', 'catalog/locale/', languages=['de'])
ro.install()

print(_('This is a translatable string.'))
