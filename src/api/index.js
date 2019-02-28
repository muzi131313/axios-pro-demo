import axiosPro from 'axios-pro'

import login from '@/api/modules/login'
import seal from '@/api/modules/seal'

const mappers = axiosPro.combine(
  login,
  seal
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
