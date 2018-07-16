import axios from 'axios'
import qs from 'qs'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' //这个样式必须引入
import { MessageBox } from 'mint-ui';

// 简单配置
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })

// axios.defaults.baseURL = '/api'
axios.defaults.baseURL = 'https://app.u17.com'
axios.defaults.timeout = 10000
axios.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest',
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}

axios.interceptors.request.use(response => {
  NProgress.start()
  return response
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  console.log(response);
  return response
}, error => {
  return Promise.resolve(error.response)
})

function checkStatus(response) {
  NProgress.done()
  // 如果http状态码正常，则直接返回数据
  if (response &&
    (response.status === 200 || response.status === 304 || response.status === 400) &&
    (response.data.code == 1)) {
    return response.data.data // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  // 异常状态下，把错误信息返回去
  return {
    status: -404,
    msg: '网络异常'
  }
}

function checkCode(res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (res.status === -404) {
    MessageBox('提示', res.msg);
  }
  if (res.data && (!res.data.success)) {
    MessageBox('提示', res.data.error_msg);
  }
  return res
}

export const post = (url, data) => {
  return axios({
    method: 'post',
    url,
    data: qs.stringify(data)
  }).then(checkStatus).then(checkCode)
}

export const get = (url, params) => {
  return axios({
    method: 'get',
    url,
    params, // get 请求时带的参数
  }).then(checkStatus).then(checkCode)
}
