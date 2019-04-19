import Mock from 'mockjs'
import { doCustomTimes } from '@/lib/tools'
import { type } from 'os'

const Random = Mock.Random

export const getCategoryList1 = () => {
  let arr = []

  const template = {
    'id|+1': 1,
    'label': '@ctitle',
    'creat_time': '@datetime',
    'level': 1,
    'link': '@url',
    'rank|+1': 1,
    'icon': '',
    'parent_id': 0,
    'children': []
  }

  doCustomTimes(3, () => {
    arr.push(Mock.mock(template))
  })
  return arr
}

export const getCategoryList2 = () => {
  let arr = []

  const template = {
    'id|+1': 4,
    'label|2-4': '@cword',
    'creat_time': '@datetime',
    'level': 2,
    'link': '@url',
    'rank|+1': 1,
    'parent_id|1-3': 0,
    'children': []
  }

  doCustomTimes(10, () => {
    arr.push(Mock.mock(template))
  })
  return arr
}

export const getCategoryList3 = () => {
  let arr = []
  const template = {
    'id|+1': 15,
    'label': '@word',
    'creat_time': '@datetime',
    'level': 3,
    'link': '@url',
    'rank|+1': 1,
    'parent_id|4-14': 0,
    'isHot|1-5': true,
    'children': []
  }
  doCustomTimes(100, () => {
    arr.push(Mock.mock(template))
  })
  return arr
}

export const getTypeDetails = () => {
  let type = 1
  let arr = []
  const template = {
    'id|+1': 1,
    'type|1-8': type,
    'title': '@word',
    'creat_time': '@datetime',
    'link': '@url',
    'price|1000-9999': 0,
    'tags|3-7': '@cword'
  }
  doCustomTimes(100, () => {
    arr.push(Mock.mock(template))
  })
  return arr
}
