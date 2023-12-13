<script>

import AppHeader from "./components/AppHeader.vue";
import AppJumbo from "./components/AppJumbo.vue";
import AppMain from "./components/AppMain.vue";
import AppNumbers from "./components/AppNumbers.vue";
import AppVideo from "./components/AppVideo.vue";
import AppCarousel1 from "./components/AppCarousel1.vue";

export default {
  components: {
    AppHeader,
    AppJumbo,
    AppMain,
    AppNumbers,
    AppVideo,
    AppCarousel1,
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
  <AppCarousel1 />

</template>

<style>

</style>
