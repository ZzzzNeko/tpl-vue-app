<template lang="pug">
#app
  h1 hello
  router-view
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      greeting: "Vue App"
    };
  }
});
</script>

<style lang="scss">
#app {
  color: #2c3e50;
  height: 100%;
}
</style>
