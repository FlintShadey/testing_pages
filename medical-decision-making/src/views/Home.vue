<!-- src/views/Home.vue -->
<template>
  <div class="home">
    <h2>Select a Condition</h2>
    <div class="button-container">
      <button @click="$router.push('/condition1')" class="condition-button">
        Condition 1
      </button>
      <button @click="$router.push('/condition2')" class="condition-button">
        Condition 2
      </button>
      <button @click="$router.push('/condition3')" class="condition-button">
        Condition 3
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
}
.button-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 300px;
  margin: 0 auto;
}
.condition-button {
  padding: 15px 30px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.1em;
}
.condition-button:hover {
  background-color: #369870;
}
</style>
