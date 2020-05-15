<template>
  <div class="home">
    <nav-header></nav-header>
    <router-view></router-view>
  </div>
</template>

<script>
import NavHeader from "./../components/NavHeader.vue";
export default {
  name: "nav-home",
  components: {
    NavHeader
  }
};
</script>
