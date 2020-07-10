<template lang="pug">
#app
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

<style lang="sass">
#app
  height: 100%
</style>
