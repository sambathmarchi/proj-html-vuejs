<script>

import AppHeader from "./components/AppHeader.vue";
import AppJumbo from "./components/AppJumbo.vue";
import AppMain from "./components/AppMain.vue";
import AppNumbers from "./components/AppNumbers.vue";
import AppVideo from "./components/AppVideo.vue";
import AppCarousel1 from "./components/AppCarousel1.vue";
import AppCarosel from "./components/Appcarosel.vue";
import AppUndermain from "./components/AppUndermain.vue";
import AppCards from "./components/AppCards.vue";
import AppFooter from "./components/AppFooter.vue";




export default {
  components: {
    AppHeader,
    AppJumbo,
    AppMain,
    AppNumbers,
    AppVideo,
    AppCarousel1,
    AppCarosel,
    AppUndermain,
    AppCards,
    AppFooter
},
  data() {
    return {
      countersNum: [
        { 
          targetNumber: "3092+", 
          text:"enrolled learners",
          duration: 3000, 
          startNumber: 0 
        },
        { 
          targetNumber: "1926", 
          text:"finished sessions",
          duration: 3000, 
          startNumber: 0 
        },
        { 
          targetNumber: "100%", 
          text:"satisfaction rate",
          duration: 3000, 
          startNumber: 0 
        },
      ],
    }
  }
}

</script>

<template>
  <AppHeader />
  <AppJumbo />
  <AppMain />
  <AppNumbers :counters="countersNum"/>
  <AppVideo />
  <AppCarousel1 />
  <AppCarosel />
  <AppUndermain />
  <AppCards />
  <AppFooter />

</template>

<style>

</style>
