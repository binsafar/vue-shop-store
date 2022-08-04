<script>
import {useCounterStore} from "../stores/counter";
import HeaderCom from "../components/HeaderCom.vue";

export default {
  components: {HeaderCom},
  setup() {
    const store = useCounterStore()
    return {store}
  }
}
</script>

<template>
  <HeaderCom/>
  <div class="about">
    <h1>ABOUT PAGE</h1>
  </div>
</template>

<style>
button {
  border: 1px solid #333;
}
</style>
