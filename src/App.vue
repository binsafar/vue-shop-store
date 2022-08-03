<script>
let axios = '';
export default {
  mounted() {
    console.log('mounted')
  },
  data() {
    return {
      counter1: 0,
      counter2: 0,
      name: '',
    }
  },
  methods: {
    greet() {
      console.log('hello world')
    },
    getUsers() {
      axios.get('url').then(res => {
        console.log(res);
      })
    },
  },
}
</script>

<template>
  <section class="main">
    <div class="test">
      <h1>hello world</h1>
      <button @click="counter1++">counter is {{ counter1 }}</button>
      <button @click="counter2--">counter is {{ counter2 }}</button>
      <button @click="greet()">hello world</button>
    </div>
    <div class="form">
      <p>message is {{ name }}</p>
      <input v-model="name"
             placeholder="edit me"
             type="text">
    </div>
  </section>
</template>

<style scoped>
.main {
  width: 500px;
  margin: 20% auto auto;
}

section {
  margin-left: 8px;
}

button {
  background: #ffffff;
  border: 1px solid #000;
  border-radius: 50px;
  padding: 8px;
  margin-left: 8px;
  cursor: pointer;
}
</style>