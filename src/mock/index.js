import Mock from 'mockjs'

<<<<<<< HEAD
import { getCategoryList1, getCategoryList2, getCategoryList3 } from './response/data'

Mock.mock(/\/getCategoryList1/, 'get', getCategoryList1)
Mock.mock(/\/getCategoryList2/, 'get', getCategoryList2)
Mock.mock(/\/getCategoryList3/, 'get', getCategoryList3)

Mock.setup({
  timeout: 0
})
=======
>>>>>>> 7f6383a3e68d90d11a05cfdc855c192ecf590698
export default Mock
