<!-- App.vue -->
<template>
  <div class="container">
    <h1>Medical Decision Making</h1>
    <nav>
      <router-link to="/" class="nav-button">Home</router-link>
      <router-link to="/about" class="nav-button">About</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}
nav {
  margin: 20px 0;
}
.nav-button {
  margin: 0 10px;
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}
.nav-button:hover {
  background-color: #369870;
}
</style>
