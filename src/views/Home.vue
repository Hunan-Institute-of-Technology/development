<template>
  <div class="home">
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-foot></nav-foot>
  </div>
</template>

<script>
import NavHeader from "./../components/NavHeader.vue";
import NavFoot from "./../components/NavFoot.vue";
export default {
  name: "nav-home",
  components: {
    NavHeader,
    NavFoot
  }
};
</script>
