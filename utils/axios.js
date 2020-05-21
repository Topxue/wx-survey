import {
  dev
} from '../env'

/**
 * wx.request封装
 */

class Axios {
  request(url, method, data = {}, header = {}) {
    wx.showNavigationBarLoading()
    return new Promise((resolve, reject) => {
      wx.request({
        url: `${dev.host}${url}`, // 仅为示例，并非真实的接口地址
        method: method,
        data: data,
        header: {
          ...header
        },
        success: function (res) {
          wx.hideNavigationBarLoading()
          resolve(res.data)
        },
        fail: function (error) {
          wx.hideNavigationBarLoading()
          reject(error)
        },
        complete: function () {
          wx.hideNavigationBarLoading()
        }
      })
    })
  }
  // GET请求
  get(url, data) {
    return this.request(url, 'GET', data)
  }
  // POST请求
  post(url, data) {
    return this.request(url, 'POST', data)
  }
}

function request() {
  return new Axios()
}

// 导出请求类
export default request();