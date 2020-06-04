<template>
  <transition name="slide">
    <div class="modal" v-show="showModal">
      <div class="mask"></div>
      <div class="modal-dialog">
        <div class="model-header">
          <span>{{title}}</span>
          <a href="javascript:;" class="icon-close"  @click="$emit('cancel')"></a>
        </div>
        <div class="model-body">
          <slot name="body"></slot>
        </div>
        <div class="model-footer">
           <a href="javascript:;" class="btn" v-if="btnType==1" @click="$emit('submit')">{{sureText}}</a>
           <a href="javascript:;" class="btn" v-if="btnType==2" @click="$emit('cancel')">{{cancelText}}</a>
          <div class="btn-ground" v-if="btnType==3" >
           <a href="javascript:;" class="btn"  @click="$emit('submit')">{{sureText}}</a>
           <a href="javascript:;" class="btn btn-default"  @click="$emit('cancel')">{{cancelText}}</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "Modal",
  props: {
    //弹框类型：1，小small 2，中middle，3大large，4表单form
    modeType: {
      type: String,
      default: "form"
    },
    //标题
    title: String,

    //按钮 1只有确认 2只有取消 3确认取消都有
    btnType: String,
    sureText: {
      type: String,
      default: "确认"
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    showModal: Boolean
  }
};
</script>


<style lang="scss">
@import "./../assets/scss/btn.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
@import "./../assets/scss/modal.scss";
.btn{
  display: inline-block;
}
</style>