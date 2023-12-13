<script>
export default {
  name: "AppCounter",
  props: {
    counters: Array,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <div class="background-banner">
    <div class="container-big">
      <div class="flex align-center">
        <div v-for="counter in counters" :key="counter.targetNumber" class="card-counter" >
          <h4 class="counter-number">{{ counter.targetNumber }}</h4>
          <p>{{ counter.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background-banner {
  margin-top: 120px;
  background-color: #faf8f6;
  padding: 70px 0px 70px 0px;
}
.card-counter {
  width: 25%;
  text-align: center;

}
.counter-number {
  font-size: 48px;
  font-weight: 800;
  color: #20ad96;
  margin: 0;

}
.card-counter > p {
  font-size: 15px;
  font-weight: 700;
  line-height: 1.34;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 14px;
  color: #3f3a64;
}
</style>