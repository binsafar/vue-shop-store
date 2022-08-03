<script>
import {useCounterStore} from "../stores/counter";
import Header1 from "../components/HeaderCom.vue";

export default {
  components: {Header1},
  setup() {
    const store = useCounterStore()
    return {store}
  }
}
</script>

<template>
  <Header1/>
  <div class="about">
    <h1>ABOUT PAGE</h1>
  </div>
</template>

<style>
button {
  border: 1px solid #333;
}
</style>
