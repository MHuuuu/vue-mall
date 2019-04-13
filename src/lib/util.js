import Cookies from 'js-cookie'
import clonedeep from 'clonedeep'

export const setToken = (token, tokenName = 'token') => {
  Cookies.set(tokenName, token)
}

export const getToken = (tokenName = 'token') => {
  return Cookies.get(tokenName)
}

/* Mock 目录整合复用 */
export const IntegrateJsonNested = (parent, children) => {
  const parentCloned = clonedeep(parent)
  const childrenCloned = clonedeep(children)

  return parentCloned.map(parentItem => {
    const parentId = parentItem.id
    let index = childrenCloned.length
    while (--index >= 0) {
      const childrenItem = childrenCloned[index]
      if (childrenItem.parent_id === parentId) {
        const file = childrenCloned.splice(index, 1)[0]
        // file.title = file.name
        if (parentItem.children) parentItem.children.push(file)
        else parentItem.children = [file]
      }
    }
    // parentItem.type = 'folder'
    return parentItem
  })
}
