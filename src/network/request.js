import axios from "axios";


// https://mce.mogucdn.com/jsonp/multiget/3?appPlat=m&pids=117330
// https://mce.mogucdn.com/jsonp/get/1?pid=595
export function request(config) {
  //创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/hy66',
    timeout: 5000,
    // method: 'post'
  })
  // 拦截器
  instance.interceptors.request.use(config => {
    return config
  },error => {
      console.log(error);
    })

  instance.interceptors.response.use(res => {
    return res.data
  }, error => {
      console.log(error);
    })

    //发送真正网络请求
  return instance(config)
}
