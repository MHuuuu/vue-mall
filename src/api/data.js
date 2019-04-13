import axios from './index'

export const getCategoryList1 = () => {
  return axios.request({
    url: '/getCategoryList1',
    method: 'get'
  })
}

export const getCategoryList2 = () => {
  return axios.request({
    url: '/getCategoryList2',
    method: 'get'
  })
}

export const getCategoryList3 = () => {
  return axios.request({
    url: '/getCategoryList3',
    method: 'get'
  })
}
