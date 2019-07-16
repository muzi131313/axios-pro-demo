import axiosPro from 'axios-pro'

import org from '@/api/modules/org'
import user from '@/api/modules/user'

const mappers = axiosPro.combine(
  org,
  user
)

const config = {
  timeout: 60e3,
  handlers: {
    timeout (msg) {
      console.log('timeout: ', msg)
    },
    data (data = {}) {
      const code = data.code
      console.log('errorInfo: ', code)
    },
    config(config) {
      console.log('config: ', config)
    },
    error (errorInfo) {
      console.log('errorInfo: ', errorInfo)
    }
  }
}

export default {
  mappers,
  config
}
