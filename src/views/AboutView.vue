<script>
import {useCounterStore} from "../stores/counter";
import HeaderCom from "../components/HeaderCom.vue";
import FooterCom from '../components/FooterCom.vue';
// import axios from 'axios';

export default {
  // mounted() {
  //   axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
  //     console.log(res.data)
  //   })
  // },
  components: {HeaderCom, FooterCom},
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
  <FooterCom/>
</template>

<style>
button {
  border: 1px solid #333;
}
</style>
