<script>
import HeaderCom from "../components/HeaderCom.vue";
import FooterCom from '../components/FooterCom.vue';
import {useCounterStore} from "../stores/counter";

export default {
  components: {HeaderCom, FooterCom},
  setup() {
    const store = useCounterStore()
    return {store}
  }
}

</script>

<template>
  <HeaderCom/>
  <div class="home">

    <h1>HOME PAGE</h1>
    <p>{{ store.counter }}</p>
    <v-btn color="primary" @click="store.increment()">+</v-btn>
    <v-btn color="error" @click="store.decrement()">-</v-btn>

  </div>
  <FooterCom/>
</template>
