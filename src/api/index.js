import axiosPro from 'axios-pro'

import org from '@/api/modules/org'
import user from '@/api/modules/user'

const mappers = axiosPro.combine(
  org,
  user
)

const config = {
  handlers: {
    timeout (msg) {
      console.log('timeout: ', msg)
    },
    data (data = {}) {
      const code = data.code
      console.log('errorInfo: ', code)
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
