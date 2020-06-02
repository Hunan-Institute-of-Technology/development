<template>
  <div>test</div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      data: "",
      phoneNum:"17674741353"
    };
  },
  mounted() {
    // this.init();
    this.init1();
    this.init2();
  },
  methods: {
    init() {
      this.axios
        .post("/sms/send/?phoneNum=" + "17674741353"
         )
        .then(() => {});
    },
    init1() {
      this.axios.get(`/goods/info/${550}`).then(res => {
        this.data = res;
      });
    },
    init2() {
      this.axios
        .post("/sms/check", {
          code:"316281",
          telephone	: "17674741353"
        })
        .then(() => {});
    }
  }
};
</script>

<style lang="scss">
</style>