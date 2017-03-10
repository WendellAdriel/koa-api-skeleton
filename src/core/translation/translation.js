import i18n from 'i18n'
import path from 'path'

import config from 'config/config'

function init (baseDir) {
  i18n.configure({
    locales: config.locales.list,
    defaultLocale: config.locales.default,
    directory: path.resolve(baseDir, '../resources/languages')
  })

  return i18n.__
}

export default init
