<template>
  <div class="profile">
    <profile-nav-bar></profile-nav-bar>
    <profile-info></profile-info>
    <profile-set></profile-set>
    <login-change></login-change>

    <router-view/>

  </div>
</template>

<script>
  import ProfileNavBar from "./childComps/ProfileNavBar";
  import ProfileInfo from "./childComps/ProfileInfo";
  import ProfileSet from "./childComps/ProfileSet";
  import LoginChange from "./childComps/LoginChange";

export default {
  name: "Profile",
  components: {
    ProfileNavBar,
    ProfileInfo,
    ProfileSet,
    LoginChange
  }
}
</script>

<style scoped>

</style>
