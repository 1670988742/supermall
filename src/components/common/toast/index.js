import Toast from "./Toast";

const obj = {}

obj.install = function (Vue) {
  // console.log('222222222222');
  //1.创建组件构造器
  const toastContrustor = Vue.extend(Toast)

  //2.构建一个组件对象
  const toast = new toastContrustor

  //3.将组件对象进行挂载
  toast.$mount(document.createElement('div'))

  //4.找到对应div
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast

}

export default obj
