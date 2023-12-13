<script>

import AppHeader from "./components/AppHeader.vue";
import AppJumbo from "./components/AppJumbo.vue";
import AppMain from "./components/AppMain.vue";
import AppNumbers from "./components/AppNumbers.vue";
import AppVideo from "./components/AppVideo.vue";

export default {
  components: {
    AppHeader,
    AppJumbo,
    AppMain,
    AppNumbers,
    AppVideo,
  },
  data() {
    return {
    }
  }
}

</script>

<template>
  <AppHeader />
  <AppJumbo />
  <AppMain />
  <AppNumbers />
  <AppVideo />

</template>

<style>

</style>
