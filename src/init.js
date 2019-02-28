import axiosPro from 'axios-pro'

import api from '@/api'

const { mappers, config } = api

export default Vue => {
  console.log('axiosPro: ', axiosPro)
  Vue.use(axiosPro, {
    mappers,
    config
  })
}
