<script>
// import {RouterLink} from 'vue-router'
</script>

<template>
  <div class="container">
    <RouterLink class="link" to="/">HOME</RouterLink>
    <RouterLink class="link" to="/about">ABOUT</RouterLink>
    <RouterLink class="link" to="/services">SERVICES</RouterLink>
    <RouterLink class="link" to="/projects">PROJECTS</RouterLink>
    <RouterLink class="link" to="/resume">RESUME</RouterLink>
    <RouterLink class="link" to="/contacts">CONTACTS</RouterLink>
  </div>
</template>


<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 64px;
  background: #909090;
}

.link {
  margin-left: 12px;
  text-decoration: none;
  color: #fff;
}

</style>