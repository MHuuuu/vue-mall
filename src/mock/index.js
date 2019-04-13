import Mock from 'mockjs'

import { getCategoryList1, getCategoryList2, getCategoryList3 } from './response/data'

Mock.mock(/\/getCategoryList1/, 'get', getCategoryList1)
Mock.mock(/\/getCategoryList2/, 'get', getCategoryList2)
Mock.mock(/\/getCategoryList3/, 'get', getCategoryList3)

Mock.setup({
  timeout: 0
})
export default Mock
