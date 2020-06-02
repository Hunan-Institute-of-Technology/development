<template>
  <div>test</div>
</template>

<script>
export default {
  name: "test",
  mounted() {
    this.init();
    this.init1();
  },
  methods: {
    init() {
      this.axios
        .post("/users/register", {
          phoneNum: '17674741353'
        })
        .then(() => {});
    },
    init1() {
      this.axios
        .get("/carousel/getCarouselList")
        .then(() => {});
    }
  }
};
</script>

<style lang="scss">
</style>