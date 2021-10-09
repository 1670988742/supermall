<template>
  <div class="login">
    <nav-bar class="nav-bar">
      <div  slot="left" @click="backclick">
        <div>返回</div>
      </div>
      <div slot="center"><div>登录</div></div>
      <div slot="right"><div>注册</div></div>
    </nav-bar>
    <form class="form">
      <div>
        <input type="text" placeholder="账号" v-model="username" class="input-item">
      </div>
      <div>
        <input type="password" placeholder="密码" v-model="password" class="input-item">
      </div>
      <div>
        <button @click.prevent="login" class="submit">登录</button>
      </div>
    </form>

    <div class="botton"></div>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import axios from "axios";
export default {
  name: "Login",
  components: {
    NavBar
  },
  data() {
    return {
      username: '',
      password: ''
    }
  },
  mounted() {

  },
  methods: {
    backclick() {
      this.$router.back(-1)
    },
    login() {
      if(this.username === "123" && this.password === "123"){
        axios.get('http://localhost:8080/user.json').then(res => {
          // console.log(res);
          localStorage.setItem('token', res.data.token)
            this.$store.state.user.username = res.data.username
            this.$store.state.user.userLevel = res.data.userLevel
            this.$store.state.user.user_id = res.data.user_id
            this.$store.state.user.headUrl = res.data.headUrl
            this.$store.state.user.pendingPayment = res.data.pendingPayment
            this.$store.state.user.toBeConfirmed = res.data.toBeConfirmed



          console.log(this.$store.state.user.username);

        })

        this.$router.push('/profile')

      }else {
        alert("账号或密码错误")
      }
    }
  }
}
</script>

<style scoped>
.nav-bar {
  background-color: #002FA7;
  color: white;
  text-align: center;
}
  .form {
    padding: 30px 0;
    text-align: center;
  }
  .backimg {
    margin-top: 10px;
    padding-left: 20px;
  }
  .input-item {
    padding: 10px 5px;
    margin-bottom: 15px;
    border: none;
    border-bottom: solid 1px rgb(231,231,231);
  }
  .submit {
    /*background: none;*/
    /*border: none;*/
    margin-top: 35px;
    height: 30px;
    width: 150px;
    background-color: #002FA7;
    border-radius: 30px;
    color: white;

  }
  .botton {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;
    height: 49px;
    background-color: #fff;
  }
</style>
