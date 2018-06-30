<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
  // data () {
  //   return {
  //     transitionName: ''
  //   }
  // },
  // watch: {
  //   $route (to, from) {
  //     if (to.meta.index > from.meta.index) {
  //       console.log('slide-left')
  //       this.transitionName = 'slide-left'
  //     } else {
  //       console.log('slide-right')
  //       this.transitionName = 'slide-right'
  //     }
  //   }
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
/* 消除边缘margin */
body {
  margin: 0;
  background-color: #FFFFF0;
}
/* 页面间滑动的动态类 */
/* .slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active { */
  /* will-change: transform; */
  /* transition: all 250ms; */
  /* position: absolute; */
/* }
.slide-right-enter {
  opacity: 0;
  transform: translate(-100%);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translateX(100%);
}
.slide-left-enter {
  opacity: 0;
  transform: translateX(100%);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translateX(-100%); */
/* } */
</style>
