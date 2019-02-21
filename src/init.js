import axiosPro from 'axios-pro'

import loginApi from './api/login'
import sealApi from './api/seal'

export default Vue => {
  console.log('axiosPro: ', axiosPro)
  const mappers = axiosPro.combine(loginApi, sealApi)
  // console.log('mappers: ', mappers)
  Vue.prototype.$BASE_URL = process.env.BASE_URL
  Vue.use(axiosPro, {
    mappers,
    config: {
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
  })
}
